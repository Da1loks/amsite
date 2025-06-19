import asyncio
import logging
from aiogram import Bot, Dispatcher, types, F
from aiogram.enums import ParseMode
from aiogram.client.default import DefaultBotProperties
from mcstatus import JavaServer
import re
from datetime import timedelta

API_TOKEN = '7687115207:AAHN2m0TN_0ZY2XLKD9Wy2Xckd74t3wQC0I'
CHAT_ID = -1002399452582  # ID чата с минусом и 100
THREAD_ID = 84043      # ID темы (message_thread_id)
SERVER_ADDRESS = 'msk2.privathub.ovh'
SERVER_PORT = 20002

logging.basicConfig(level=logging.INFO)

bot = Bot(token=API_TOKEN, default=DefaultBotProperties(parse_mode=ParseMode.HTML))
dp = Dispatcher()

SLOT_EMOJI = "🎰"
TARGET_CUSTOM_EMOJI_ID = "сюда_вставьте_ваш_id"

# --- Вспомогательные функции ---
def parse_time_human(number, unit):
    unit = unit.lower()
    if unit.startswith('мин'):
        return timedelta(minutes=int(number))
    elif unit.startswith('час'):
        return timedelta(hours=int(number))
    elif unit.startswith('дн'):
        return timedelta(days=int(number))
    return None

def parse_time(time_str):
    match = re.match(r"(\d+)([mhd])", time_str)
    if not match:
        return None
    value, unit = match.groups()
    value = int(value)
    if unit == 'm':
        return timedelta(minutes=value)
    elif unit == 'h':
        return timedelta(hours=value)
    elif unit == 'd':
        return timedelta(days=value)
    return None

# --- Проверка статуса сервера ---
async def check_server_status():
    server = JavaServer(SERVER_ADDRESS, SERVER_PORT)
    last_status = None
    while True:
        try:
            status = server.status()
            if last_status != "online":
                await bot.send_message(
                    chat_id=CHAT_ID,
                    text="Сервер Minecraft ВКЛЮЧЕН ✅",
                    message_thread_id=THREAD_ID
                )
                last_status = "online"
        except Exception:
            if last_status != "offline":
                await bot.send_message(
                    chat_id=CHAT_ID,
                    text="Сервер Minecraft ВЫКЛЮЧЕН ❌",
                    message_thread_id=THREAD_ID
                )
                last_status = "offline"
        await asyncio.sleep(300)

# --- Обработчик статистики ---
@dp.message(F.text == "статистика")
async def send_stats(message: types.Message):
    server = JavaServer(SERVER_ADDRESS, SERVER_PORT)
    try:
        status = server.status()
        online = status.players.online
        max_players = status.players.max
        await message.reply(f"Сервер ВКЛЮЧЕН ✅\nОнлайн: {online}/{max_players}")
    except Exception:
        await message.reply("Сервер ВЫКЛЮЧЕН ❌")

# --- Обработчик казино-эмодзи ---
@dp.message(F.text & F.text.func(lambda text: SLOT_EMOJI in text))
async def delete_slot_text(message: types.Message):
    try:
        await message.delete()
        await message.answer("деп запрещён")
    except Exception as e:
        print(f"Ошибка при удалении текстового сообщения: {e}")

@dp.message(F.caption & F.caption.func(lambda caption: SLOT_EMOJI in caption))
async def delete_slot_caption(message: types.Message):
    try:
        await message.delete()
        await message.answer("деп запрещён")
    except Exception as e:
        print(f"Ошибка при удалении подписи: {e}")

@dp.message(F.sticker)
async def delete_slot_sticker(message: types.Message):
    print(f"Стикер: emoji={message.sticker.emoji}, custom_emoji_id={getattr(message.sticker, 'custom_emoji_id', None)}")
    if message.sticker.emoji == "🎰":
        try:
            await message.delete()
            await message.answer("деп запрещён")
        except Exception as e:
            print(f"Ошибка при удалении стикера: {e}")

@dp.message(F.sticker)
async def debug_sticker(message: types.Message):
    print(f"emoji={message.sticker.emoji}, custom_emoji_id={getattr(message.sticker, 'custom_emoji_id', None)}")
    await message.answer(f"emoji={message.sticker.emoji}, custom_emoji_id={getattr(message.sticker, 'custom_emoji_id', None)}")

@dp.message(F.sticker)
async def delete_slot_custom_emoji(message: types.Message):
    if getattr(message.sticker, 'custom_emoji_id', None) == TARGET_CUSTOM_EMOJI_ID:
        try:
            await message.delete()
            await message.answer("деп запрещён")
        except Exception as e:
            print(f"Ошибка при удалении custom emoji: {e}")

# --- Обработчик 'сборка' ---
@dp.message(F.text.regexp(r"сборк[ауеи]?", flags=re.IGNORECASE))
async def sborka_reply(message: types.Message):
    await message.reply("сам ищи")

# --- MAIN ---
async def main():
    asyncio.create_task(check_server_status())
    await dp.start_polling(bot)

@dp.message()
async def debug_all(message: types.Message):
    print("text:", message.text)
    print("entities:", message.entities)
    print("sticker:", getattr(message, "sticker", None))
    print("caption:", message.caption)
    await message.answer("debug")

@dp.message()
async def debug_content_type(message: types.Message):
    print("content_type:", message.content_type)
    await message.answer(f"content_type: {message.content_type}")

@dp.message()
async def debug_raw(message: types.Message, event_update):
    print(event_update)
    await message.answer("raw debug")

if __name__ == '__main__':
    asyncio.run(main()) 