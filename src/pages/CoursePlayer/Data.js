export const CourseData = {
    title: "Aprenda Go (Golang) do zero ao avançado 100% na prática e com suporte!",
    totalLessons: 261,
    totalHours: 85,
    lastUpdate: "junho de 2024",
}

export const sections = [
    {
        title: "Seção 1: Começando sua jornada",
        completed: 2,
        totalLessons: 3,
        totalDuration: "16m",
        lessons: [
            { id: 1, number: 1, title: "Introdução ao go", completed: true, duration: "10m" },
            { id: 2, number: 2, title: "Configurando ambientes", completed: true, duration: "4m" },
            { id: 3, number: 3, title: "Go playground", completed: false, duration: "2m" }
        ]
    },
    {
        title: "Seção 2: Fundação em GO",
        completed: 0,
        totalLessons: 10,
        totalDuration: "1h 35m",
        lessons: [
            { id: 4, number: 1, title: "Funções básicas", completed: false, duration: "15m" },
            { id: 5, number: 2, title: "Variáveis e constantes", completed: false, duration: "10m" },
            { id: 6, number: 3, title: "Estruturas de controle", completed: false, duration: "12m" },
            { id: 7, number: 4, title: "Arrays e slices", completed: false, duration: "10m" },
            { id: 8, number: 5, title: "Maps", completed: false, duration: "8m" },
            { id: 9, number: 6, title: "Structs", completed: false, duration: "15m" },
            { id: 10, number: 7, title: "Interfaces", completed: false, duration: "10m" },
            { id: 11, number: 8, title: "Ponteiros", completed: false, duration: "10m" },
            { id: 12, number: 9, title: "Métodos", completed: false, duration: "10m" },
            { id: 13, number: 10, title: "Concorrência", completed: false, duration: "15m" }
        ]
    },
    {
        title: "Seção 3: Projetos práticos",
        completed: 0,
        totalLessons: 5,
        totalDuration: "1h 20m",
        lessons: [
            { id: 14, number: 1, title: "Projeto 1: CLI Task Manager", completed: false, duration: "20m" },
            { id: 15, number: 2, title: "Projeto 2: REST API", completed: false, duration: "25m" },
            { id: 16, number: 3, title: "Projeto 3: WebSockets", completed: false, duration: "15m" },
            { id: 17, number: 4, title: "Projeto 4: Testes", completed: false, duration: "15m" },
            { id: 18, number: 5, title: "Projeto 5: Conclusão", completed: false, duration: "15m" }
        ]
    },
    {
        title: "Seção 4: Bônus",
        completed: 0,
        totalLessons: 3,
        totalDuration: "30m",
        lessons: [
            { id: 19, number: 1, title: "Bônus 1: Go em produção", completed: false, duration: "10m" },
            { id: 20, number: 2, title: "Bônus 2: Go e Docker", completed: false, duration: "10m" },
            { id: 21, number: 3, title: "Bônus 3: Go e Kubernetes", completed: false, duration: "10m" }
        ]
    },
    {
        title: "Seção 5: Encerramento",
        completed: 0,
        totalLessons: 1,
        totalDuration: "5m",
        lessons: [
            { id: 22, number: 1, title: "Encerramento", completed: false, duration: "5m" },

        ]
    },

];
