document.addEventListener('DOMContentLoaded', () => {

  //Объект с модальными окнами
  const modal = {
    modalNewContact: modalCreationContact(),
    modalDelete: modalDeleteContact(),
    //modalChangeContact: modalChangeContact(),
  }

  document.body.append(modal.modalNewContact)
  document.body.append(modal.modalDelete)


  //Объект с контаком
  const arrayContact = { id: 1, name: 'Чистяков Владислав Евгеньевич', dataCreate: ['10.10.2000', '16:00'], dataChange: ['10.10.2000', '16:00'], contacts: '@@@' }

  //функция для отображения контакта в таблице
  function tableContact(obect) {
    const tr = document.createElement('tr')

    const tdId = document.createElement('td')
    const tdName = document.createElement('td')
    const tdDataCreate = document.createElement('td')
    const tdDataChange = document.createElement('td')
    const tdContacts = document.createElement('td')
    const tdButtons = document.createElement('td')

    const spanDataChange = document.createElement('span')
    const spanDataCreate = document.createElement('span')

    const actionBtnChenge = document.createElement('button')
    const actionBtnDelete = document.createElement('button')

    tdId.classList.add('id-block', 'text-grey')
    tdName.classList.add('name-block')
    tdDataCreate.classList.add('data-create-block')
    tdDataChange.classList.add('data-change-block')
    tdContacts.classList.add('contact-block')
    tdButtons.classList.add('action-block')

    spanDataCreate.classList.add('text-grey', 'table-span-padding')
    spanDataChange.classList.add('text-grey', 'table-span-padding')

    actionBtnChenge.classList.add('btn-change-contact', 'js-btn-chenge', 'btn')
    actionBtnDelete.classList.add('btn-delete-contact', 'js-btn-delete', 'btn')

    tdId.textContent = obect.id
    tdName.textContent = obect.name
    tdDataCreate.textContent = obect.dataCreate[0]
    tdDataChange.textContent = obect.dataChange[0]
    tdContacts.textContent = obect.contacts

    spanDataCreate.textContent = obect.dataCreate[1]
    spanDataChange.textContent = obect.dataChange[1]

    actionBtnChenge.textContent = 'Изменить'
    actionBtnDelete.textContent = 'Удалить'

    tdDataCreate.append(spanDataCreate)
    tdDataChange.append(spanDataChange)

    tdButtons.append(actionBtnChenge, actionBtnDelete)


    //Добавляем событие на кнопку "Удалить"
    actionBtnDelete.addEventListener('click', () => {
      //modal.modalDelete
      const modal = document.querySelector('.module-delete__box-delete')
      activeModal(modal)
      document.querySelector('.modal-background').addEventListener('click', (e) => {
        console.log(e)
      })
    })

    tr.append(tdId, tdName, tdDataCreate, tdDataChange, tdContacts, tdButtons)

    document.querySelector('tbody').append(tr)
  }

  //Вызов функции с отображения контакта
  tableContact(arrayContact)

  //Вызов модального окна на кнопке нового контакта
  document.querySelector('.footer-btn').addEventListener('click', () => {
    const modal = document.querySelector('.module-creation__box-creation')
    activeModal(modal)
    //console.log(modalCreationContact().value)
  })


})


