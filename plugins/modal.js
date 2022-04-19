

//функция открытия модального окна
function activeModal(element) {
  element.classList.add('js-modal-active')
  return element
}


//функция закрытия модального окна
function closeModal(event, modal, btn = '') {
  if (event.target.dataset.modal) {
    if (btn !== '') {
      clearingModalWindow(modal, btn)
    }
    modal.classList.remove('js-modal-active')
  }
}


// Функция очищения модального окна
function clearingModalWindow(modal, btn) {
  //Получаем доступ ко всем input
  const nameInput = modal.querySelector('#create-name')
  const surnameInput = modal.querySelector('#create-surname')
  const patronymicInput = modal.querySelector('#create-patronymic')
  const blockLabel = modal.querySelectorAll('.form-contacts__label')
  //Очищаем поля input
  nameInput.value = ''
  surnameInput.value = ''
  patronymicInput.value = ''
  // Удаляем select и убераем margin у кнопки
  blockLabel.forEach(element => element.remove())
  if (document.querySelectorAll('.form-contacts__label').length == 0) {
    btn.classList.remove('margin-modal-btn')
  }

  // получаем доступ к label для нормальной отрисовки этого элемента, при очистки поля input
  document.querySelector('.js-label-name').classList.add('form-label')
  document.querySelector('.js-label-name').classList.remove('form-label-active')

  document.querySelector('.js-label-surname').classList.add('form-label')
  document.querySelector('.js-label-surname').classList.remove('form-label-active')

  document.querySelector('.js-label-patronymic').classList.add('form-label')
  document.querySelector('.js-label-patronymic').classList.remove('form-label-active')
}

function modalDeleteContact() {
  const moduleBox = document.createElement('div')
  moduleBox.classList.add('module-delete__box-delete', 'modal-background')
  //делаем обработчик на скрытие модального окна
  moduleBox.dataset.modal = "close"
  moduleBox.addEventListener('click', e => {
    closeModal(e, moduleBox)
  })

  //создаём HTML модального окна
  let modalContact = `
  <div class="modal-delete__box">
      <div class="modal-delete__modal-header">
      <button class="modal-creation__modal-close js-modal-close btn" data-modal="close">
        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"  data-modal="close">
          <path  data-modal="close" fill-rule="evenodd" clip-rule="evenodd"
            d="M22.2333 7.73333L21.2666 6.76666L14.4999 13.5334L7.73324 6.7667L6.76658 7.73336L13.5332 14.5L6.7666 21.2667L7.73327 22.2333L14.4999 15.4667L21.2666 22.2334L22.2332 21.2667L15.4666 14.5L22.2333 7.73333Z"
            fill="#B0B0B0" />
        </svg>
      </button>
      <h2 class="modal-delete__heading">
        Удалить
      </h2>
    </div>
    <p class="modal-delete__text">Вы действительно хотите удалить данного клиента?</p>
    <div class="modal-delete__box-button">
      <button type="submit" class="btn modal-creation__btn-action">Удалить</button>
      <button data-modal="close" type="button" class="btn modal-creation__btn-cancellation">Отмена</button>
    </div>
   </div> 
      `
  //Добавляем HTML в бокс маодального окна
  moduleBox.innerHTML = modalContact

  return moduleBox
}

function modalCreationContact() {

  // Создаём задний фон модалки
  const moduleBox = document.createElement('div')
  moduleBox.classList.add('module-creation__box-creation', 'modal-background')
  // Вешаем data-modal для закрытия при нажатии на фон
  moduleBox.dataset.modal = "close"
  moduleBox.addEventListener('click', e => {
    closeModal(e, moduleBox, btnAddContact)
  })

  //Создаём HTML Модального окна нового контакта
  let modalContact =
    `<div class="modal-creation__box">
      <div class="modal-creation__modal-header">
    <button class="modal-creation__modal-close js-modal-close btn" data-modal="close">
      <svg data-modal="close" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path data-modal="close" fill-rule="evenodd" clip-rule="evenodd"
          d="M22.2333 7.73333L21.2666 6.76666L14.4999 13.5334L7.73324 6.7667L6.76658 7.73336L13.5332 14.5L6.7666 21.2667L7.73327 22.2333L14.4999 15.4667L21.2666 22.2334L22.2332 21.2667L15.4666 14.5L22.2333 7.73333Z"
          fill="#B0B0B0" />
      </svg>
    </button>
    <h2 class="modal-creation__heading">
    Новый клиент
    </h2>
  </div>
    <div class="modal-creation__modal-body">
    <form class="modal-creation__form" method="POST">
      <div class="modal-creation__form-main form-main">
        <div class="form-block">
          <input requerid type="surname" class="form-input" id="create-surname" placeholder="">
          <label for="create-surname" class="form-label js-label-surname">Фамилия<span class="form-label__span">*</span></label>
        </div>
        <div class="form-block">
          <input requerid type="name" class="form-input" id="create-name" placeholder=''>
          <label for="create-name" class="form-label  js-label-name">Имя<span class="form-label__span">*</span></label>
        </div>
        <div class="form-block">
          <input type="name2" class="form-input" id="create-patronymic" placeholder=''>
          <label for="create-patronymic" class="form-label js-label-patronymic">Отчество</label>
        </div>
      </div>
      <div class="modal-creation__form-contacts form-contacts">
        <div class="form-contacts__block-contacts block-contacts">
        </div>
        <button type="button" class="btn form-contacts__add-contact add-contact js-add-contact">Добавить контакт</button>
      </div>
      <div class="modal-creation__box-button">
        <button type="submit" class="btn modal-creation__btn-action" data-modal="close">Сохранить</button>
        <button data-modal="close" type="button" data-modal="close" class="btn modal-creation__btn-cancellation">Отмена</button>
      </div>
      </div>
    </form>`

  // Здесь мы задаём весь HTML блоку модального окна
  moduleBox.innerHTML = modalContact

  const btnAddContact = moduleBox.querySelector('.js-add-contact')

  //Получаем доступ к кажому input 
  // input имени
  const nameFieldValue = moduleBox.querySelector('#create-name')

  // input фамилии
  const surnameFieldValue = moduleBox.querySelector('#create-surname')

  // input Отчества
  const patronymicFieldValue = moduleBox.querySelector('#create-patronymic')


  // Здесь делается действие над тегом label, чтобы он поднимался и отпускался вверх и вниз
  // Действие над label name
  nameFieldValue.addEventListener('input', () => {
    if (nameFieldValue.value !== '') {
      setTimeout(() => {
        document.querySelector('.js-label-name').classList.add('form-label-active')
        document.querySelector('.js-label-name').classList.remove('form-label')
      }, 2)
    } else {
      document.querySelector('.js-label-name').classList.add('form-label')
      document.querySelector('.js-label-name').classList.remove('form-label-active')
    }
  })

  // Действие над label surname
  surnameFieldValue.addEventListener('input', () => {
    if (surnameFieldValue.value !== '') {
      setTimeout(() => {
        document.querySelector('.js-label-surname').classList.add('form-label-active')
        document.querySelector('.js-label-surname').classList.remove('form-label')
      }, 2)
    } else {
      document.querySelector('.js-label-surname').classList.add('form-label')
      document.querySelector('.js-label-surname').classList.remove('form-label-active')
    }
  })

  // Действие над label patronymic
  patronymicFieldValue.addEventListener('input', () => {
    if (patronymicFieldValue.value !== '') {
      setTimeout(() => {
        document.querySelector('.js-label-patronymic').classList.add('form-label-active')
        document.querySelector('.js-label-patronymic').classList.remove('form-label')
      }, 2)
    } else {
      document.querySelector('.js-label-patronymic').classList.add('form-label')
      document.querySelector('.js-label-patronymic').classList.remove('form-label-active')
    }
  })


  // Функция нажатия на кнопку Добавить контакс
  btnAddContact.addEventListener('click', () => {
    console.log('123333')
    const label = document.createElement('label')
    const btnClose = document.createElement('button')
    btnClose.classList.add('form-contacts__btn-close', 'btn')
    btnClose.type = 'button'
    label.classList.add('form-contacts__label')
    //Создаём HTML для тега select
    label.innerHTML = `
    <select name="select" class="form-contacts__select">
      <option class="form-contacts__option">Телефон</option>
      <option class="form-contacts__option">Email</option>
      <option class="form-contacts__option">Facebook</option>
      <option class="form-contacts__option">VK</option>
      <option class="form-contacts__option">Другое</option>
    </select>
    <input class="form-contacts__input" placeholder="Ведите данные контакта" type="text">
    `
    //Добавляем кнопку удаления контакта
    label.append(btnClose)

    //Добавляем событие для кнопки удаления контакта
    btnClose.addEventListener('click', () => {
      // Если информации для связи с клиентом больше 10, то удаляется кнопка для создания поля с созданием поля доп.информацией
      if (document.querySelectorAll('.form-contacts__label').length === 10) {
        document.querySelector('.form-contacts').append(btnAddContact)
      }
      //Удаление поля информации
      label.remove()
      // Если поля с информацией отсутствуют, то кнопка возвращает свои первоначальные размеры
      if (document.querySelectorAll('.form-contacts__label').length == 0) {
        btnAddContact.classList.remove('margin-modal-btn')
      }
    })

    moduleBox.querySelector('.block-contacts').append(label)

    //Стилизация тега select
    //Используется специальная библиотека
    const element = label.querySelector('.form-contacts__select')
    const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
    })

    //Стили для кнопки добавления контакта
    if (document.querySelectorAll('.form-contacts__label').length >= 1) {
      btnAddContact.classList.add('margin-modal-btn')
    }
    //Удаление кнопки при излишке контактов
    if (document.querySelectorAll('.form-contacts__label').length === 10) {
      btnAddContact.remove()
      return
    }
  })

  let contact = ''


  //Создания события на кнопке сохранить
  moduleBox.querySelector('.modal-creation__btn-action').addEventListener('click', (e) => {
    e.preventDefault()

    // получение доступа ко всем input
    const nameInput = moduleBox.querySelector('#create-name')
    const surnameInput = moduleBox.querySelector('#create-surname')
    const patronymicInput = moduleBox.querySelector('#create-patronymic')

    // получение доступа ко всем select
    const selects = moduleBox.querySelectorAll('.choices__list--single')
    const inputs = moduleBox.querySelectorAll('.form-contacts__input')
    const arraySelect = []
    const arrayContact = []

    for (let select of selects) {
      arraySelect.push(select.children[0].textContent)
    }

    for (let input of inputs) {
      arrayContact.push(input.value)
    }


    //function filteringFormValues(input) {
    //  input.addEventListener('input', () => {
    //    input.value = input.value.replace(/[^а-я\-\s]/gi, '')
    //  })

    //  input.addEventListener('blur', () => {
    //    let changes = input.value

    //    for (let i = 0; i < String(changes).length; ++i) {
    //      changes = changes.replace(/--/gi, '-')
    //    }

    //    for (let i = 0; i < String(changes).length; ++i) {
    //      changes = changes.replace(/\s\s/gi, ' ')
    //    }

    //    if (changes[0] === '-' || changes[0] === ' ') {
    //      changes = changes.substring('1')
    //    }

    //    if (changes[changes.length - 1] === '-' || changes[changes.length - 1] === ' ') {
    //      changes = changes.slice(0, -1)
    //    }

    //    changes = String(changes).trim().split('')[0].toUpperCase() + String(changes).trim().substring('1').toLowerCase()
    //    input.value = changes
    //    eee.push(changes)
    //  })
    //}



    //Создания объекта с данными о клиенте
    const newContactValue = { id: 1, name: `${surnameInput.value} ${nameInput.value} ${patronymicInput.value}`, dataCreate: ['10.10.2000', '16:00'], dataChange: ['10.10.2000', '16:00'], contacts: '@@@' }
    //const arrayContact = { id: 1, name: 'Чистяков Владислав Евгеньевич', dataCreate: ['10.10.2000', '16:00'], dataChange: ['10.10.2000', '16:00'], contacts: '@@@' }
    const arrayConta = { id: 1, name: 'Чистяков Владислав Евгеньевич', dataCreate: ['10.10.2000', '16:00'], dataChange: ['10.10.2000', '16:00'], contacts: '@@@' }



    //Очищение модального окна
    //clearingModalWindow(moduleBox, btnAddContact)
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

    tableContact(newContactValue)


    closeModal(e, moduleBox, btnAddContact)



    console.log(newContactValue)
  })


  //let module = { mod: moduleBox, value: '' }

  return moduleBox
}

