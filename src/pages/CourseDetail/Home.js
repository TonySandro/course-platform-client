import React from 'react';
import CourseInfos from '../../components/CourseDetail/CourseInfo/CourseInfo';
import CourseContent from '../../components/CourseDetail/CourseContent/CourseContent';
import { courseObject } from './Data';
import CourseCurriculum from '../../components/CourseDetail/CourseCurriculum/CourseCurriculum';

const data = {
  totalSections: 10,
  totalLessons: 161,
  totalDuration: '26h 48m',
  sections: [
    {
      title: 'Introdução',
      lessons: [
        { title: 'Boas Vindas!', duration: '10:03', link: '#' },
        { title: 'Instalando Go e Visual Studio Code', duration: '7:12', link: '#' },
        { title: 'Escrevendo seu primeiro Olá Mundo!', duration: '12:05', link: '#' }
      ]
    },
    {
      title: 'Fundamentos da Linguagem',
      lessons: [
        { title: 'Variáveis e Tipos', duration: '15:30', link: '#' },
        { title: 'Funções', duration: '20:10', link: '#' }
      ]
    },
    {
      title: 'Estruturas de Controle',
      lessons: [
        { title: 'Condicionais', duration: '25:22', link: '#' },
        { title: 'Laços de Repetição', duration: '30:45', link: '#' }
      ]
    },
    {
      title: 'Arrays e Slices',
      lessons: [
        { title: 'Arrays', duration: '18:14', link: '#' },
        { title: 'Slices', duration: '22:37', link: '#' }
      ]
    },
    {
      title: 'Mapas e Estruturas',
      lessons: [
        { title: 'Mapas', duration: '28:50', link: '#' },
        { title: 'Structs', duration: '33:12', link: '#' }
      ]
    },
    {
      title: 'Interfaces e Ponteiros',
      lessons: [
        { title: 'Interfaces', duration: '40:20', link: '#' },
        { title: 'Ponteiros', duration: '45:33', link: '#' }
      ]
    },
    {
      title: 'Concorrência',
      lessons: [
        { title: 'Goroutines', duration: '50:45', link: '#' },
        { title: 'Channels', duration: '55:10', link: '#' }
      ]
    },
    {
      title: 'Testes e Documentação',
      lessons: [
        { title: 'Testes', duration: '60:25', link: '#' },
        { title: 'Documentação', duration: '65:40', link: '#' }
      ]
    },
    {
      title: 'Projetos Práticos',
      lessons: [
        { title: 'Projeto 1: Web Scraper', duration: '70:55', link: '#' },
        { title: 'Projeto 2: API REST', duration: '75:30', link: '#' }
      ]
    },
    {
      title: 'Conclusão',
      lessons: [
        { title: 'O que aprendemos?', duration: '80:15', link: '#' }
      ]
    }
  ]
};


function CourseDetail() {
  return (
    <div>
      <CourseInfos course={courseObject} />
      <CourseContent course={courseObject}/>
      <CourseCurriculum data={data}/>
    </div>
  );
}

export default CourseDetail;