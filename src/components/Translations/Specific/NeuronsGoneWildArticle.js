import React, {useEffect, useState} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import ArticleHeader from "../../Articles/ArticleHeader";
import useCollapse from 'react-collapsed';
import NewsWidget from "../../Common/NewsWidget";

import headerImg from "../../../Assets/Translations/neurons-gone-wild.jpeg";
import agentsImg from "../../../Assets/Translations/neurons-gone-wild-agents.jpeg";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import {AiOutlineDown, AiOutlineHome, AiOutlineUp} from "react-icons/ai";

const NavigationData = [
    {href: "#intro", text: "Нейроны, эгоистичные и дикие"},
    {href: "#level1", text: "Агенты во всей красе"},
    {href: "#level2", text: "Уровень 2: Модули"},
    {href: "#level3", text: "Уровень 3: Субличностные агенты"},
    {href: "#level4", text: "Уровень 4: Личность («Я»)"}
]

const NavigationList = ({data}) => (
    <ul>
        {data.map(item =>
            (<li>
                <a href={item.href}>{item.text}</a>
            </li>))}
    </ul>
)

function Collapsible() {
    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse();
    return (
            <div className="collapsible">
                <div className="header" {...getToggleProps()}>
                    <p>СОДЕРЖАНИЕ
                    { isExpanded
                        ? <AiOutlineUp style={{marginLeft: "12px"}}/>
                        : <AiOutlineDown style={{marginLeft: "12px"}}/>}
                    </p>
                </div>
                <div {...getCollapseProps()}>
                    <div className="content">
                        <NavigationList data={NavigationData}/>
                    </div>
                </div>
            </div>
    );
}

export default function NeuronsGoneWildArticle() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="article-section">
                <ArticleHeader img={headerImg}
                               category="ПЕРЕВОД" date="ИЮНЬ 2022" name="Нейроны, которые сошли с ума"/>
                <Row>
                    <Col xs={12} md={9} className="article-card">

                        <Card className="article-body tab-content mb-5">

                            <Collapsible/>
                            <br/>
                            <p>Легко отвергать богов и духов - достаточно прогнать их во имя науки.</p>
                            <p>Но принять их, или хотя бы связанные с ними переживания, и дать им научное объяснение -
                                вот задача, достойная мастера. В конце концов, это требует, чтобы мы смотрели им прямо в
                                глаза и воспринимали их совершенно серьезно, имея при этом твердую основу.</p>
                            <p>Я понятия не имею, насколько то, что я скажу, окажется правдой. Но в чем я уверен, так
                                это в том, что все это будет чертовски интересно.</p>
                            <p>Сегодня мы будем судить о безумии с помощью науки. Мы рассмотрим зависимости, навязчивые
                                идеи, альтер-эго и воображаемых друзей, ангельские голоса и демоническую одержимость и
                                даже экзорцизм. И мы постараемся дать этим безумствам место, всем и каждому из них, в
                                единой и разумной структуре.</p>
                            <p>Естественно, мы начнем с нейрона.</p>

                            <h3 id="intro">Нейроны, эгоистичные и дикие</h3>
                            <p>В своем интервью для <a href="https://www.edge.org/">Edge.org</a> Дэн Деннетт выдвинул
                                одну из самых интересных идей, с которыми я сталкивался. Он считает, что наши нейроны
                                стали мощными вычислительными строительными блоками, потому что они вернулись к своему
                                прежнему, несколько одичавшему состоянию.</p>
                            <p>Деннетт пишет [1]:</p>
                            <blockquote>
                                <p>Представьте себе, что каждая клетка вашего тела (я имею в виду и нейроны в том
                                    числе), является прямым потомком эукариотических клеток, которые жили для себя и
                                    вынуждены были защищать свою жизнь около миллиарда лет как свободно плавающие,
                                    свободно живущие маленькие агенты. Для этого им пришлось разработать огромное
                                    количество ноу-хау и способов самозащиты. Однако, когда они стали частью
                                    многоклеточных организмов, им пришлось отказаться от большей части этих достижений.
                                    В результате они стали «одомашненными» - частью более крупных, более однородных
                                    организаций.</p>
                                <p>Обычно нам не нужно беспокоиться о том, что наши мышечные клетки начнут бунтовать
                                    (когда это происходит, мы называем это раком). Но у меня такое чувство, что в нашем
                                    мозгу в процессе эволюции щелкнул какой-то маленький переключатель, и это, по сути,
                                    привело к небольшому одичанию нейронов. Это похоже на то, как если бы вы отпустили
                                    овцу или свинью на волю: животные очень быстро вспоминают свои забытые таланты.</p>
                                <p>Возможно, нейроны в нашем мозге не просто способны, но и мотивированы быть более
                                    авантюрными, исследовательскими или рискованными в том виде, в котором они
                                    существуют. В конце концов, они борются между собой за влияние и за то, чтобы
                                    остаться в живых, а когда это происходит, появляется возможность для сотрудничества,
                                    формирования альянсов, коалиций и т.д.</p>
                            </blockquote>
                            <p>Следуя за Денеттом, мы сталкиваемся с Себастьяном Сеуном, специалистом по вычислительной
                                нейробиологии. По мнению Сеунга и Денетта, именно благодаря «эгоизму» нейронов мозг
                                способен «спонтанно реорганизовываться в ответ на травму или новый опыт». Пример:</p>
                            <blockquote>
                                <p>Майк Мерцених сшил два пальца обезьяны вместе так, что они больше не представляли две
                                    отдельные величины в коре головного мозга, а слились в одну. В результате, довольно
                                    быстро, вышеупомянутые участки коры головного мозга сократились, что позволило
                                    использовать эту часть коры для других целей. Когда швы с пальцев были сняты - два
                                    пальца полностью восстановили свою работоспособность, а участки коры вскоре
                                    вернулись к прежним размерам и функциям.</p>
                                <p>А Альваро Паскуаль-Леоне обнаружил, что когда человек в течение восьми недель ходит с
                                    завязанными глазами, зрительная кора медленно адаптируется к восприятию
                                    прикосновений, к чтению по Брайлю.</p>
                                <p>Почему эти [неработающие] нейроны так стремятся изменить свой статус? Ну, потому что
                                    они потеряли работу. Они безработные, а когда они таковыми являются, они не получают
                                    нейромодуляторы, поэтому их рецепторы атрофируются, вызывая еще большую безработицу,
                                    что приводит к их смерти.</p>
                            </blockquote>
                            <p>Другими словами, эгоизм нейронов побуждает их быть полезными. Подключиться к нужной сети
                                других нейронов, которая, в свою очередь, подключена к другим сетям (как в качестве
                                получателя, так и отправителя). Это позволяет им сохранять свою долю энергии и другого
                                сырья, необходимого для выживания.</p>
                            <p>Таким образом, мы имеем дело с внутренней экономикой мозга, которая заставляет нейроны
                                конкурировать друг с другом за ресурсы. Это противоречит концепции стандартной
                                компьютерной архитектуры фон Неймана , в которой ни одна из частей, составляющих
                                систему, не должна беспокоиться об источнике энергии. Без борьбы за ресурсы нет
                                необходимости в эгоизме. Отчасти именно поэтому компьютеры менее гибкие и адаптируемые -
                                менее <i>пластичные</i> - чем мозг.</p>
                            <p>Пластичность, как говорит Денетт,</p>
                            <blockquote>
                                <p>...это одно из самых удивительных свойств мозга. Если описание архитектуры мозга,
                                    которое вы постулируете, не учитывает этого, ваша модель имеет серьезные недостатки.
                                    Я думаю, что вы должны рассматривать нейроны как микро-агенты и задавать вопрос: что
                                    они получат от этого?</p>
                            </blockquote>
                            <p><i>Нейроны как агенты:</i> это может быть самым важным фактом о нашем мозге.</p>

                            <h3 id="level1">Агенты во всей красе</h3>
                            <p>Так что же такое агент и почему он так важен?</p>
                            <p><i>Агент</i> - это своеобразная группа интересов, сущность, способная к автономному,
                                разумному и целенаправленному поведению.</p>
                            <p>Люди, безусловно, являются агентами. Корпорации и правительства также являются агентами,
                                поскольку они преследуют свои цели (такие как «максимизация акционерной стоимости» или
                                «защита территории»). Даже растение можно назвать агентом, поскольку оно «хочет» расти в
                                направлении солнца. Не все агенты могут быть эгоистичными - как пример — некоммерческие
                                организации, но любая эгоистичная система (например, нейрон), обязательно будет
                                агентом.</p>
                            <p>Но агент не является бинарным: это не то, что вы либо «имеете», либо «не имеете». Скорее,
                                следует говорить о степени, в которой что-то или кто-то проявляет характеристики агента.
                                Чем более автономна, интеллектуальна, адаптивна и целеустремленна система, тем сильнее
                                агент. Таким образом, дети, как правило, являются более слабыми агентами, чем их (более
                                умные и целеустремленные) родители, а рабы - чем их (более автономные) хозяева.</p>
                            <p>Другой ключевой факт заключается в том, что агентность не присуща системе, а скорее
                                является тем, что мы ей приписываем. Это способ описания системы на уровне абстракции,
                                который включает в себя цели, препятствия, мотивацию и т.д. Если смотреть слишком
                                пристально (на достаточно низком уровне абстракции), может показаться, что агентность
                                исчезает. Например, растение «всего лишь» растит свой стебель в зависимости <a
                                    href="https://ru.wikipedia.org/wiki/%D0%A4%D0%BE%D1%82%D0%BE%D1%82%D1%80%D0%BE%D0%BF%D0%B8%D0%B7%D0%BC">от
                                    концентрации ауксина</a>, точно так же как мы (люди) часто «всего лишь» действуем в
                                соответствии с нашими влечениями и инстинктами. Но уменьшите масштаб, и вы снова сможете
                                описать систему на уровне взаимодействия агентов. Таким образом, способность к
                                пояснению, а не свободная воля, является отличительной чертой агентства.</p>
                            <p>Вопросы, которые я хочу исследовать сегодня, касаются агентности различных систем в
                                мозге. Мы можем выстроить их в пирамиду, где один агент на вершине опирается на других
                                агентов по всей высоте пирамиды:</p>
                            <img src={agentsImg} alt="Brain agents" className="center"/>
                            <p>Обратите внимание, что нет строгого разделения между «уровнями». Это просто удобные
                                ярлыки для того, чтобы мы могли говорить и рассуждать о них. В действительности мозг -
                                это скопление агентов, действующих на разных уровнях, часто одновременно. Как сказал бы
                                Хофштадтер, эта система больше похожа на <i>гетерархию</i>, чем на иерархию.</p>
                            <p>Сегодня я собираюсь утверждать, что <strong>агентность - это фундаментальное свойство
                                мозга</strong>. Агентство не только является функцией мозга - и, следовательно, самой
                                причиной его существования, - но оно также встроено в его структуру и архитектуру.
                                Поскольку даже нейроны обладают агентностью в форме (метаболического) эгоизма, мозговым
                                системам более высокого порядка не нужно создавать агентность «с нуля» из бездумных
                                роботов-рабов. Они наследуют агентность практически бесплатно.</p>
                            <p>Как видите, мозг чрезвычайно <i>гостеприимен</i> для агентов, которые <i>легко пускают в
                                нем корни и разрастаются.</i></p>
                            <p>На самом деле здесь действует более общий принцип, а именно: богатые субстраты более
                                плодородны, более благоприятны для роста. Бактерии лучше растут в агаре, богатом
                                глюкозой, чем в соленой воде. Растения лучше растут в (органической) почве, чем в
                                (неорганическом) песке. Идеи быстрее развиваются в сплоченном обществе, чем в
                                разреженном. И так далее.</p>
                            <p>Аналогично, агенты лучше всего растут на субстрате, богатом другими более мелкими
                                агентствами. Компьютеры, хотя технически и способны поддерживать агентность, не особенно
                                гостеприимны к ней. Мозг, напротив, уже изобилует агентностью (в виде миллиардов
                                эгоистичных нейронов) и поэтому является уникально плодородным.</p>
                            <p>Давайте на мгновение остановимся на этой метафоре органического роста и запомним ее. Это
                                очень важно, и мы обязательно вернемся к нему в ближайшее время.</p>
                            <p>А пока мы рассмотрим, как работают агенты на разных уровнях. Мы начнем снизу вверх, уже
                                рассмотрев уровень 1 (нейроны).</p>

                            <h3 id="level2">Уровень 2: Модули</h3>
                            <p>Модульные представления о разуме появились еще на заре развития искусственного
                                интеллекта. В 1959 году Оливер Селфридж предложил архитектуру «Пандемониума» для системы
                                ИИ, наполненную маленькими независимыми «демонами», каждый из которых выполняет простую,
                                конкретную работу. Деннетт, следуя за Селфриджем, также называет свои модули «демонами»
                                в своей книге «Сознание объяснено». В «Обществе разума» Мински пишет уже не о «демонах»,
                                а о «агентах».</p>
                            <p>Основная идея заключается в том, что существует уровень абстракции, на котором мы можем
                                описать мозг в терминах сотен, тысяч или даже миллионов маленьких модулей, более или
                                менее независимых друг от друга, каждый со своей функциональной задачей или целью. Эти
                                модули, конечно же, обладают агентством, но их сфера действия довольно ограничена. В
                                качестве примера можно привести детекторы краев (в зрительной системе), контроллеры
                                пальцев (в сенсомоторной коре) и спрягатели глаголов (в языковой системе).</p>
                            <p>Модули довольно часто упоминаются в литературе, поэтому я не буду писать о них слишком
                                много. Я просто хочу отметить, что, если Денетт и Сеунг правы, модули наследуют
                                некоторые характеристики агентов - эгоизм, например, - от нейронов, из которых они
                                состоят. У модуля есть свои причины «хотеть» выполнять свою работу - если бы он ее
                                потерял, его нейроны ослабли бы, атрофировались. Иногда «безработные» модули достаточно
                                умны, чтобы взять на себя другие задачи, как, например, зрительная система, которая
                                может адаптироваться для чтения шрифта Брайля.</p>

                            <h3 id="level3">Уровень 3: Субличностные агенты</h3>
                            <p>На уровне выше простых модулей, но ниже «личности» или же нашего "Я", находятся те, кого
                                я буду называть <i>субличностными агентами</i>. Это системы, подобные влечениям или
                                инстинктам - голод, вожделение, любопытство, жадность, зависимость - которые обладают
                                агентностью, понятной даже неспециалистам. Нам не нужна нейронаука, чтобы рассуждать об
                                этих агентах, потому что мы можем «чувствовать» их через интроспекцию, как они
                                проявляются в нашей психике - слабо или настойчиво, мягко или жестоко. И действительно,
                                люди рассуждали об этих системах, как об агентах, на протяжении тысячелетий.</p>
                            <p>Субличностные агенты не способны использовать язык напрямую (как это делает "Я"), поэтому
                                их деятельность ограничена и менее ориентирована на внешний мир. Тем не менее, они
                                обладают реальной силой, поскольку способны влиять на познание, эмоции и поведение
                                человеческих существ, в которых они обитают. Они также способны корректировать свой
                                мыслительный процесс, чтобы рационализировать свои желания.</p>
                            <p>Субличностные агенты также обладают огромной <i>объяснительной</i> силой. Это наиболее
                                заметно в жизни наркомана. Наркоман «сам» часто не хочет продолжать свою зависимость, но
                                он все равно продолжает это делать. Поэтому наркомана часто описывают, даже он сам, как
                                бессильного и безвольного, и, возможно, самое лучшее, самое разумное объяснение его
                                поведения заключается в том, что в его мозгу есть буквально <i>еще один агент</i> - его
                                внутренний наркоман, реализованный в виде определенной группы нейронов и модулей.</p>
                            <p>Когда вы впервые принимаете наркотик, вызывающий зависимость - скажем, никотин, - вокруг
                                источника удовольствия (то есть нейротрансмиттеров, наполняющих ваш мозг во время
                                курения) начинает зарождаться новый агент. Сначала этот агент маленький и слабый. Но чем
                                больше вы его кормите, тем больше он растет, пока под его влиянием не окажется множество
                                нейронов, множество модулей и даже другие агенты мозга, питающиеся никотином и жаждущие
                                его во все больших дозах, кооптирующие ваши навыки планирования и рассуждения, чтобы они
                                могли планировать, как получить больше никотина.</p>
                            <p>Этот процесс, конечно, чрезвычайно <i>адаптивен</i> для нас, эволюционировавших
                                организмов, но только в том случае, если удовольствие связано с чем-то, имеющим ценность
                                для выживания или воспроизводства: еда, секс, социальный статус, владение физическими
                                навыками. Тот факт, что наш мозг способен выращивать агентов, нацеленных на добычу пищи
                                и секса, является существенным для нашего выживания. Только в современной
                                (суперстимулирующей) среде у нас возникают проблемы.</p>
                            <p>Несколько лет назад в программе <i>«Эта американская жизнь»</i> была хорошая передача о
                                зависимости, в которой продюсеры - похоже, ради шутки - попросили людей олицетворить
                                свои зависимости. «Нам показалось, что люди всю жизнь ждали, когда кто-нибудь задаст им
                                этот вопрос», - сказали продюсеры, а вскоре после этого поделились описанием «голосов»
                                своих внутренних наркоманов:</p>
                            <blockquote>
                                <p>«Голос неотразим, всегда. Я нахожусь в плену этого голоса».</p>
                                <p>«Полностью вышел из-под контроля. Он живет своей собственной жизнью, и я больше не
                                    могу его усмирить».</p>
                                <p>«На самом деле у меня есть имя для этого голоса. Я называю его Стэн. Стэн - это тот
                                    парень, который говорит мне выпить лишний бокал вина. Стэн - это парень, который
                                    говорит мне курить».</p>
                            </blockquote>
                            <p>Обратите внимание, что это не буквальная речь, как при слуховой галлюцинации. Вместо
                                этого «голос» - это просто агент, чье влияние достигает самоанализа и, следовательно,
                                может быть подвергнуто интерпретации. То, что мы называем их <i>голосами</i>, просто
                                свидетельствует о высоком уровне абстракции, на котором действуют эти агенты.</p>
                            <p>В этом же смысле - абстрактном, нелитеральном - эти агенты участвуют в «рассуждениях»,
                                «переговорах», «торгах», вступлении в «альянсы» и других формах коалиционной политики.
                                Когда два субличностных агента торгуются, например, они не используют для этого слова,
                                но процесс, несомненно, можно выразить словами - и поэтому эти агенты могут быть очень
                                «убедительными». Еще раз процитирую запись из передачи <i>«Эта американская жизнь»</i>:
                            </p>
                            <blockquote>
                                <p>[Любитель долго поспать] «Потом я встану через пять минут, и [голос] скажет: «Э, да
                                    ладно, в конце концов, тебе не обязательно гладить эту юбку. Действительно ли тебе
                                    это нужно? Почему бы тебе просто не выбрать другую юбку, и тогда ты сможешь поспать
                                    еще 10 минут». Это звучит как разумный аргумент».</p>
                            </blockquote>
                            <p>Навязчивые идеи, компульсии, зависимости и другие «внутренние демоны» - не единственные
                                агенты, обладающие реальной властью контролировать и менять наше поведение; в нашем
                                мозгу также живут «доброжелательные» агенты. Например, наша совесть. Это агенты, живущие
                                внутри нашего мозга, которые обучаются на протяжении всей нашей жизни, но особенно в
                                детстве, в процессе общения с родителями, авторитетными фигурами и другими учителями
                                морали, а также с помощью различных поощрений и (особенно) наказаний.</p>
                            <p>Некоторые религиозные общины, например, евангелисты, которых <a
                                href="https://bloggingheads.tv/videos/9884">изучала Таня Лурманн</a>, тратят много
                                времени и усилий на то, чтобы научить себя «слышать» (метафорический) голос Бога или
                                интерпретировать Его волю. «Люди тренируют разум», - говорит она, - «таким образом, что
                                они ощущают часть своего разума как присутствие Бога». Этот «Бог» - не более и не менее
                                как интернализованный, персонифицированный агент, представляющий интересы общества.</p>
                            <p>Интересная особенность нашего мозга заключается в том, что общество (или, возможно,
                                «элита общества») может устанавливать такого рода агентов - Бога, совесть, чувство
                                морали - для обеспечения своих собственных интересов. Это напоминает то, как ООН
                                устанавливает инспекторов по вооружению или наблюдателей за выборами в суверенных
                                странах.</p>

                            <h3 id="level4">Уровень 4: Личность («Я»)</h3>
                            <p>Наконец мы подошли к непосредственно нашей личности - «Я», эго, наша самость,
                                сознательная воля.</p>
                            <p>Надеюсь, я уже показал, что наше «Я» не является единственным значимым агентом в мозге.
                                Но оно является доминирующим агентом или, по крайней мере, тем, кто занимает позицию
                                номинального лидера. Майк Треверс дает такое <a
                                    href="https://www.ribbonfarm.com/2013/10/18/the-government-within/">запоминающееся
                                    описание</a> самости:</p>
                            <blockquote>
                                <p>Человек, как и общество, состоит из частей со своими собственными личными интересами,
                                    которые балансируют между конфликтом, сотрудничеством и компромиссом. Наши
                                    разрозненные мотивы подобны политикам, пытающимся продвинуть свою фракцию, а «Я»,
                                    как оно есть, чем-то напоминает премьер-министра - могущественного не самого по
                                    себе, а потому что ему удалось стать лицом самой могущественной фракции.</p>
                            </blockquote>
                            <p>С этой точки зрения, «Я» - это социальный агент. Оно обращено как вовне, так и вовнутрь,
                                его роль - это в равной степени и связи с <i>общественностью</i>, и <i>исполнительный
                                    контроль</i>.</p>
                            <p>Вот что я нахожу особенно глубоким. Если мы признаем, что мозг кишит агентами и,
                                следовательно, уникально гостеприимен к ним, тогда мы можем моделировать самость как
                                нечто, <i>возникающее естественным образом</i> в ходе взаимодействия мозга с миром.</p>
                            <p>Другими словами, самость может быть не столько <i>особенностью</i> нашего мозга
                                (запланированной или спроектированной нашими генами), сколько его <i>ростом</i>. Каждый
                                нормальный человеческий мозг, помещенный в правильную среду - с достаточной автономией и
                                потенциалом для социального взаимодействия - вырастит самоагента. Но если мозг или среда
                                аномальны, неправильны (каким-то образом) или просто другие, «Я» может получиться не
                                таким, как ожидалось.</p>
                            <p>Представьте себе девочку, воспитывающуюся с младенчества при полном отсутствии
                                социализации/цивилизованного контакта с другими людьми. Будучи взрослым человеком, она,
                                вероятно, будет иметь <i>базовое представление о себе</i>, например, сможет узнать себя
                                в зеркале. Но без языка, норм, стыда и социального наказания, агент(ы) на вершине
                                иерархии ее мозга, конечно, не будет выполнять социальную/PR роль. У этой девушки не
                                будет ни «лица», ни индивидуальности. Она останется разумным существом, да, но
                                не <i>личностью</i>.</p>
                            <p>Таким образом, самость создает структуру, которая зависит от среды (и является
                                отражением), в которой она была создана.</p>
                        </Card>
                    </Col>

                    <NewsWidget/>
                </Row>
            </Container>
        </div>
    )
        ;
}