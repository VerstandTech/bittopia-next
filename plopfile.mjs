export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/components',
        base: '_plop/components',
        templateFiles: '_plop/components/**/*'
      }
    ]
  })

  plop.setGenerator('layout', {
    description: 'Create a layout',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your layout name?'
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/layouts',
        base: '_plop/layout',
        templateFiles: '_plop/layout/**/*'
      }
    ]
  })

  plop.setGenerator('service', {
    description: 'Create a service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your service name?'
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/services',
        base: '_plop/services',
        templateFiles: '_plop/services/**/*'
      }
    ]
  })

  plop.setGenerator('util', {
    description: 'Create a util',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your util name?'
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/utils',
        base: '_plop/utils',
        templateFiles: '_plop/utils/**/*'
      }
    ]
  })

  plop.setGenerator('hook', {
    description: 'Create a hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook name?'
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/hooks',
        base: '_plop/hooks',
        templateFiles: '_plop/hooks/**/*'
      }
    ]
  })
};
