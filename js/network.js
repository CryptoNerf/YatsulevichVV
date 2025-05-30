document.addEventListener('DOMContentLoaded', function() {
    // Создаем узлы
    const nodes = new vis.DataSet([
        { 
            id: 1, 
            label: "ΔATA.V", 
            group: "main",
            title: "Центральный узел DATA.V",
            description: "Платформа для образовательных материалов",
            // Переопределяем шрифт для этого узла: больше размер и жирный шрифт
            font: {
                size: 24,
                bold: true, 
                face: "Inter, sans-serif" // Добавьте шрифт
            }
        },
        { 
            id: 2, 
            label: "IT", 
            group: "content",
            title: "IT",
            description: "В настоящее время информационные технологии используются повсеместно и каждый день. Большое количество задач эффективно решается с помощью информационных технологий. А навыки разработки программного обеспечения являются необходимыми для успешного развития бизнеса и науки. В данном разделе вы сможете найти различные материалы для изучения той или иной информационной технологии."
        },
        { 
            id: 3, 
            label: "ОГЭ", 
            group: "content",
            title: "ОГЭ",
            description: "Основной государственный экзамен. Данный экзамен является обязательным для выпускников 9 классов. В данном разделе вы сможете найти различные материалы для подготовке к ОГЭ по математике, физике и инфоматике. Здесь есть как полноценные лекции, там и шпаргалки по формулам."
        },
        { 
            id: 4, 
            label: "ЕГЭ", 
            group: "content",
            title: "ЕГЭ",
            description: "Единый государственный экзамен. Данный экзамен является обязательным для выпускников 11 класса. В данном разделе вы сможете найти различные материалы для подготовки к ЕГЭ по математике, физике и инфоматике. Здесь есть как полноценные лекции, так и шпаргалки по формулам."
        },
        { 
            id: 5, 
            label: "НАУКА", 
            group: "content",
            title: "НАУКА",
            description: "Современные лекции по новым областям науки, актуальные исследования и просто интересные, красивые и необычные факты из мира математики и физики. Всё это вы сможете найти в данном разделе. Современные научные исследования это не только важные и фундаментальные открытия. Это связь теоретического мира науки и практического мира бизнеса, образования и технологий."
        },
        { 
            id: 6, 
            label: "КНИГИ", 
            group: "content",
            title: "КНИГИ",
            description: "Подробное решение упражнений и задач различных учебных пособий с красивой и понятной векторной графикой. Это отличительная особенность данного раздела. Задачи структурированы по книгам. А структура внутри одной книги строится аналогично структуре того или иного учебного пособия. В данном разделе вы сможете найти решение задач по высшей математике и общей физике."
        },
        // Добавляем узлы подкатегорий
        { 
            id: 7, 
            label: "Язык программирования Python", 
            group: "chapter",
            title: "Язык программирования Python",
            description: "Машинное обучение, нейронные сети, компьютерное зрение, веб-разработка, разработка игр, разработка приложений, анализ данных, научные исследования, квантовые вычисления. И это только часть того, на что способен язык программирования Python. Для современного разработчика умение писать программы на этом языке явлется просто необходимым. В данном разделе представлены учебные материалы, которые помогут вам изучить язык программирования Python."
        },
        { 
            id: 8, 
            label: "Математика", 
            group: "chapter",
            title: "Математика-ОГЭ",
            description: "Математика является фундаментом всех технических наук. Причём важная часть фундамента выстраивается как раз до 9 класса. Поэтому крайне важно освоить математику. В данном разделе вы сможете изучить и детально разобраться в алгебре, геометрии и арифметике. Преимуществом данного сайта являются приятные графически изображения, совпровождающие решения задач."
        },
        // { 
        //     id: 9, 
        //     label: "Информатика", 
        //     group: "chapter",
        //     title: "Информатика-ОГЭ",
        //     description: "Актуальные образовательные лекции по различным темам"
        // },
        { 
            id: 10, 
            label: "Физика", 
            group: "chapter",
            title: "Физика-ОГЭ",
            description: "Для понимания принципов природных явлений, происходящих вокруг нас крайне важно освоить физику до 9 класса. Именно на этом этапе выстраивается физическая картина мира у обучающегося. В данном разделе представлены с одной стороны, быстрые и полезные сборники формул. А с другой стороны в данном разделе вы можете ознакомиться с полноценными лекциями по физике."
        },
        // { 
        //     id: 11, 
        //     label: "Математика", 
        //     group: "chapter",
        //     title: "Математика-ЕГЭ",
        //     description: "Актуальные образовательные лекции по различным темам"
        // },
        { 
            id: 12, 
            label: "Информатика", 
            group: "chapter",
            title: "Информатика-ЕГЭ",
            description: "Современному абитуриенту, который хочет связать свою жизнь с какой-либо технической или естественной специальностю, необходим кругозор в области информационных технологий. А если обучающийся планирует развиваться непосредственно в сторону информатики, то ему необходимо сдать соответствующий экзамен в 11 классе. В данном разделе вы сможете найти разбор каждого типа задач ЕГЭ по информатике."
        },
        // { 
        //     id: 13, 
        //     label: "Физика", 
        //     group: "chapter",
        //     title: "Физика-ЕГЭ",
        //     description: "Актуальные образовательные лекции по различным темам"
        // },
        { 
            id: 14, 
            label: "Современные методы\nквантовых вычислений", 
            group: "chapter",
            title: "Современные методы квантовых вычислений",
            description: "Курс представляет из себя общий обзор алгоритмов, симуляторов и современных результатов в области квантовых вычислений. Основной упор курса будет сделан на практику и будет включать знакомство с основными программными пакетами в сфере квантовых вычислений. Для каждого из рассмотренных алгоритмов будет обсуждаться реализация на основе тех библиотек и языков программирования, которые также будут представлены в данном разделе."
        },
        { 
            id: 15, 
            label: "Теория вероятностей\nи математическая статистика", 
            group: "chapter",
            title: "Теория вероятностей и математическая статистика",
            description: "Математическая статистика - это незаменимый инструмент практически любого современного исследователя. В данном разделе вы сможете детально ознакомиться с решением практических задач учебника советского математика В.Е. Гмурмана. Многие решения сопровождаются красивыми иллюстрациями."
        },
        // Добавляем дочерние узлы для IT
        { 
            id: 16, 
            label: "Введение в Python", 
            group: "subcontent",
            url: "/YatsulevichVV/html/it/python/python_first.html"
        },
        // Добавляем дочерние узлы для ОГЭ
        { 
            id: 17, 
            label: "Задание 21", 
            group: "subcontent",
            url: "/YatsulevichVV/html/oge/math/oge_math_21_a.html"
        },
        { 
            id: 18, 
            label: "Формулы", 
            group: "subcontent",
            url: "/YatsulevichVV/html/oge/phys/oge_phys_formulas.html"
        },
        { 
            id: 19, 
            label: "Термодинамика", 
            group: "subcontent",
            url: "/YatsulevichVV/html/oge/phys/termodynamic.html"
        },
        // Добавляем дочерние узлы для ЕГЭ
        { 
            id: 20, 
            label: "Задание 17", 
            group: "subcontent",
            url: "/YatsulevichVV/html/ege/inf/ege_inf_task17.html"
        },
        // Добавляем дочерние узлы для НАУКА
        { 
            id: 21, 
            label: "Оптимизационные модели", 
            group: "subcontent",
            url: "/YatsulevichVV/html/science/modern_qc/modern_qc_lecture1.html"
        },
        { 
            id: 22, 
            label: "Примеры задач", 
            group: "subcontent",
            url: "/YatsulevichVV/html/science/modern_qc/modern_qc_lecture2.html"
        },
        { 
            id: 23, 
            label: "Способы представления\nоптимизационных задач", 
            group: "subcontent",
            url: "/YatsulevichVV/html/science/modern_qc/modern_qc_lecture3.html"
        },
        // Добавляем дочерние узлы для КНИГИ
        { 
            id: 24, 
            label: "Основные понятия\nтеории вероятностей", 
            group: "subcontent",
            url: "/YatsulevichVV/html/high_math/gmurman/chapter1.html"
        },
        { 
            id: 25, 
            label: "Выборочный метод", 
            group: "subcontent",
            url: "/YatsulevichVV/html/high_math/gmurman/chapter1.html"
        },
    ]);

    // Создаем связи
    const edges = new vis.DataSet([
        { from: 1, to: 2, arrows: "to" },
        { from: 1, to: 3, arrows: "to" },
        { from: 1, to: 4, arrows: "to" },
        { from: 1, to: 5, arrows: "to" },
        { from: 1, to: 6, arrows: "to" },
        // Связи для IT
        { from: 2, to: 7, arrows: "to" },
        { from: 7, to: 16, arrows: "to" },
        // Связи для ОГЭ
        { from: 3, to: 8, arrows: "to" },
        { from: 3, to: 9, arrows: "to" },
        { from: 3, to: 10, arrows: "to" },
        { from: 8, to: 17, arrows: "to" },
        { from: 10, to: 18, arrows: "to" },
        { from: 10, to: 19, arrows: "to" },
        // Связи для ЕГЭ
        { from: 4, to: 11, arrows: "to" },
        { from: 4, to: 12, arrows: "to" },
        { from: 4, to: 13, arrows: "to" },
        { from: 12, to: 20, arrows: "to" },
        // Связи для НАУКИ
        { from: 5, to: 14, arrows: "to" },
        { from: 14, to: 21, arrows: "to" },
        { from: 14, to: 22, arrows: "to" },
        { from: 14, to: 23, arrows: "to" },
        // Связи для КНИГ
        { from: 6, to: 15, arrows: "to" },
        { from: 15, to: 24, arrows: "to" },
        { from: 15, to: 25, arrows: "to" },
    ]);

    // Настройки сети
    const options = {
        nodes: {
            shape: "box",
            margin: 10,
            borderWidth: 1,
            font: {
                size: 16,
            },
            // Убираем скругление углов
            shapeProperties: {
                borderRadius: 0
            },
            // Отключаем визуальный эффект выделения при клике и ховере
            chosen: false
        },
        edges: {
            width: 1,
            color: { color: "222222" },
            // Делаем стрелки строго прямыми
            smooth: false
        },
        groups: {
            main: { 
                // Настройка цвета для группы main
                color: { background: "#91C8E4", border: "#222222" },
                borderWidth: 1,
                shape: "box",
                font: { size: 16, color: "#222222",  face: "Inter, sans-serif", bold: true, }
            },
            content: { 
                // Настройка цвета для группы content
                color: { background: "#ffffff", border: "#222222" },
                shape: "box",
                borderWidth: 1,
            },
            subcontent: { 
                color: { background: "#E4E4E4", border: "#222222" },
                shape: "box",
                borderWidth: 1,
                font: { size: 16 }
            }
        },
        physics: {
            enabled: true,
            barnesHut: {
                gravitationalConstant: -3600,
                centralGravity: 0.15,
                springLength: 125,
                springConstant: 0.05
            },
            stabilization: {
                enabled: true,
                iterations: 1000,
                updateInterval: 100
            }
        },
        interaction: {
            // Отключаем эффекты hover
            hover: false,
            tooltipDelay: 200,
            hideEdgesOnDrag: true,
            multiselect: false
        }
    };

    // Создаем сеть
    const container = document.getElementById("network-container");
    const data = { nodes: nodes, edges: edges };
    const network = new vis.Network(container, data, options);

    // Добавляем кнопку полноэкранного режима
    const fullscreenButton = document.createElement('button');
    fullscreenButton.className = 'network-fullscreen-button';
    fullscreenButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>';
    container.appendChild(fullscreenButton);

    // Флаг для отслеживания состояния полноэкранного режима
    let isFullscreen = false;
    
    // Сохраняем исходные размеры и позицию контейнера
    let originalStyles = {
        width: '',
        height: '',
        position: '',
        top: '',
        left: '',
        zIndex: ''
    };

    // Функция для переключения полноэкранного режима
    function toggleFullscreen() {
        if (!isFullscreen) {
            // Сохраняем текущие стили
            originalStyles = {
                width: container.style.width,
                height: container.style.height,
                position: container.style.position,
                top: container.style.top,
                left: container.style.left,
                zIndex: container.style.zIndex
            };
            
            // Устанавливаем полноэкранный режим
            container.style.position = 'fixed';
            container.style.top = '0';
            container.style.left = '0';
            container.style.width = '100%';
            container.style.height = '100%';
            container.style.zIndex = '9999';
            
            // Меняем иконку на кнопке
            fullscreenButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg>';
            
            isFullscreen = true;
        } else {
            // Возвращаем исходные стили
            container.style.width = originalStyles.width;
            container.style.height = originalStyles.height;
            container.style.position = originalStyles.position;
            container.style.top = originalStyles.top;
            container.style.left = originalStyles.left;
            container.style.zIndex = originalStyles.zIndex;
            
            // Меняем иконку на кнопке обратно
            fullscreenButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>';
            
            isFullscreen = false;
        }
        
        // Пересчитываем размер сети
        setTimeout(() => {
            network.fit();
        }, 100);
    }

    // Добавляем обработчик клика на кнопку полноэкранного режима
    fullscreenButton.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleFullscreen();
    });

    // Обработчик клика по узлам для показа дополнительной информации
    network.on("click", function(params) {
        const infoPanel = document.getElementById("info-panel");
        const infoContent = document.getElementById("info-content");
        
        if (params.nodes.length > 0) {
            const nodeId = params.nodes[0];
            const node = nodes.get(nodeId);
            
            // Проверяем наличие URL для перехода
            if (node.url) {
                window.location.href = node.url;
            } else {
                // Отображаем информацию для основных узлов
                infoContent.innerHTML = `
                    <h3>${node.label}</h3>
                    <p>${node.description}</p>
                `;
                infoPanel.style.display = "block";
            }
        } else {
            infoPanel.style.display = "none";
        }
    });

    // Начальная позиция для лучшего вида
    network.once("stabilizationIterationsDone", function() {
        network.fit();
    });
    
    // Адаптация сети при изменении размера окна
    window.addEventListener('resize', function() {
        network.fit();
    });
    
    // Обработчик клавиши Escape для выхода из полноэкранного режима
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && isFullscreen) {
            toggleFullscreen();
        }
    });
});