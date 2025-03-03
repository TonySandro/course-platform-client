import React, { useState } from 'react';
import {
  TabsContainer,
  TabNav,
  TabItem,
  TabContent,
  CourseTitle,
  CourseInfoRow,
  CourseLastUpdate
} from './CourseTabs.style';

const CourseTabs = ({ courseData }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!courseData) {
    return <p>Carregando dados do curso...</p>;
  }


  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            <CourseTitle>{courseData.title}</CourseTitle>
            <CourseInfoRow>
              <span>{courseData.totalLessons} Aulas</span>
              <span>{courseData.totalHours} horas</span>
            </CourseInfoRow>
            <CourseLastUpdate>
              Última atualização em {courseData.lastUpdate}
            </CourseLastUpdate>
          </>
        );
      case 'qa':
        return <p>Perguntas e respostas dos alunos.</p>;
      case 'observacoes':
        return <p>Espaço para observações ou anotações do curso.</p>;
      default:
        return null;
    }
  };

  return (
    <TabsContainer>
      <TabNav>
        <TabItem
          active={activeTab === 'overview'}
          onClick={() => setActiveTab('overview')}
        >
          Visão geral
        </TabItem>
        <TabItem
          active={activeTab === 'qa'}
          onClick={() => setActiveTab('qa')}
        >
          Perguntas e respostas
        </TabItem>
        <TabItem
          active={activeTab === 'observacoes'}
          onClick={() => setActiveTab('observacoes')}
        >
          Observações
        </TabItem>
      </TabNav>

      <TabContent>
        {renderContent()}
      </TabContent>
    </TabsContainer>
  );
};

export default CourseTabs;
