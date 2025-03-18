describe('Visit Pages', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('visit Home', () => {
        cy.contains('Home').click()
        cy.contains('This is home page')
        cy.contains('Go to Tasks')
    })

    it('visit Tasks', () => {
        cy.contains('Tasks').click()
        cy.contains('This is tasks page')
    })
})

describe('Tasks', () => {
    beforeEach(() => {
        cy.visit('/tasks')
    })

    it('list tasks', () => {
        cy.contains('Learn HTML')
        cy.contains('Learn CSS')
        cy.contains('Learn JS')
    })

    it('Add new Task', () => {
        cy.get('input[name="taskTitle"]').type('Learn VueJS').then(() => {
            cy.contains('Add Task').click().then(() => {
                cy.contains('Learn Vue 4')
            })
        })
    })

    it('Mark task as completed', () => {
        
    })

    it('Delete the task', () => {

    })
})