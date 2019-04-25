// Stateless component
import React from 'react'
import { connect } from 'react-redux'
import * as CourseActions from './../actions/course'
import { bindActionCreators } from 'redux'

// Dispatch serve para disparar actions para o Redux
const Sidebar = ({ modules, toggleLesson }) => (
  <aside>
    {modules.map(module => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map(lesson => (
            <li key={lesson.id}>
              {lesson.title}
              {/* Disparando a action criada na função toggleLesson, com o module e lesson selecionado */}
              <button onClick={() => toggleLesson(module, lesson)}>Selecionar</button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
)

// O mapStateToProps recebe o estado como parametro e retorna o objeto que será utilizado no componente
const mapStateToProps = state => ({
  modules: state.course.modules
})

// O mapDispatchToProps recebe o dispach como parametro e retorna a ação desse dispacth
// const mapDispatchToProps = dispatch => ({
//   toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson))
// })

// Usando o bindActionsCreators para fazer a junção das funções toggleLesson, porque a função da action
// no arquivo course, era o mesmo do atributo do objeto retornado originalmente
const mapDispatchToProps = dispatch => bindActionCreators(CourseActions, dispatch)

// O connect() aceita por padrão dois parametros, que são as funções mapStateToProps e mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

/*
 * AO COLOCAR AS FUNÇÕES MapStateToProps E mapDispacthToProps, ESTAMOS RETORNANO OBJETOS, ONDE OS ATRIBUTOS
 * DESSES OBJETOS, SERÃO UTILIZADOS COMO PARAMETRO NA FUNÇÃO DO COMPONENTE. REPARE QUE NO MapStateToProps
 * RETORNAMOS O ATRIBUTO modules, LOGO ELE DEVE SER UTILIZADO COMO PARAMETRO NO COMPONENTE PARA ACESSAR
 * OS modules DA STORE DO REDUX, A MESMA IDEIA VALE PARA O DISPATCH, ONDE RETORNAMOS UM ATRIBUTO toggleLesson,
 * QUE PODERÁ SER USADO DENTRO DO COMPONENTE PARA TER ACESSO AOS DISPATCH DO REDUX.
*/
