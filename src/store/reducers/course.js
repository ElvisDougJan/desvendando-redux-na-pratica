const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: 'Iniciando com React',
      lessons: [
        {
          id: 1,
          title: 'Primeira aula'
        },
        {
          id: 2,
          title: 'Segunda aula'
        }
      ]
    },
    {
      id: 2,
      title: 'Aprendendo Redux',
      lessons: [
        {
          id: 1,
          title: 'Terceira aula'
        },
        {
          id: 2,
          title: 'Quarta aula'
        }
      ]
    }
  ]
}

// Por padrão, todo o reducer recebe 2 parametros, o primeiro sendo o estado e o segundo sendo a action

export default function course(state = INITIAL_STATE, action) {
  console.warn('ACTION', action)
  console.log('teste')
  if (action.type === 'TOGGLE_LESSON') {
    return { 
      ...state, 
      activeLesson: action.lesson,
      activeModule: action.module
    }
  }

    return state
}

// const store = createStore(course)

// export default store
