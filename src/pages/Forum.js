import React, { useState } from 'react';
import '../styles/Forum.css';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

const Forum = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Все темы', icon: 'fas fa-globe' },
    { id: 'news', name: 'Новости', icon: 'fas fa-newspaper' },
    { id: 'help', name: 'Помощь', icon: 'fas fa-question-circle' },
    { id: 'suggestions', name: 'Предложения', icon: 'fas fa-lightbulb' },
    { id: 'builds', name: 'Постройки', icon: 'fas fa-home' },
  ];

  const topics = [
    {
      id: 1,
      category: 'news',
      title: 'Обновление сервера до 1.20.1',
      author: 'Admin',
      replies: 15,
      views: 234,
      lastActivity: '2 часа назад',
      pinned: true,
    },
    {
      id: 2,
      category: 'help',
      title: 'Как установить моды?',
      author: 'NewPlayer',
      replies: 8,
      views: 156,
      lastActivity: '5 часов назад',
    },
    {
      id: 3,
      category: 'suggestions',
      title: 'Предложение по улучшению спавна',
      author: 'Builder123',
      replies: 23,
      views: 445,
      lastActivity: '1 день назад',
    },
    // Добавьте больше тем по необходимости
  ];

  const filteredTopics = selectedCategory === 'all' 
    ? topics 
    : topics.filter(topic => topic.category === selectedCategory);

  return (
    <div className="amethyst">
      <Navbar />
      <PageTransition>
        <div className="forum-container">
          <div className="forum-header">
            <h1 className="forum-title">Форум сообщества</h1>
            <button className="create-topic-btn">
              <i className="fas fa-plus"></i>
              Создать тему
            </button>
          </div>

          <div className="forum-categories">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <i className={category.icon}></i>
                {category.name}
              </button>
            ))}
          </div>

          <div className="topics-list">
            {filteredTopics.map(topic => (
              <div key={topic.id} className={`topic-card ${topic.pinned ? 'pinned' : ''}`}>
                {topic.pinned && (
                  <div className="pin-indicator">
                    <i className="fas fa-thumbtack"></i>
                  </div>
                )}
                <div className="topic-main">
                  <h3 className="topic-title">{topic.title}</h3>
                  <div className="topic-meta">
                    <span className="topic-author">
                      <i className="fas fa-user"></i>
                      {topic.author}
                    </span>
                    <span className="topic-stats">
                      <i className="fas fa-reply"></i>
                      {topic.replies}
                    </span>
                    <span className="topic-stats">
                      <i className="fas fa-eye"></i>
                      {topic.views}
                    </span>
                  </div>
                </div>
                <div className="topic-activity">
                  <span className="activity-time">{topic.lastActivity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Forum;