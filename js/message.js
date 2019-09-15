!function(){
  var view = document.querySelector('section.messages')

  var model = {
    // 初始化数据
    init: function () {
      var APP_ID = 'IVqt0TfKUts3UI6EmM1iT9HQ-gzGzoHsz';
      var APP_KEY = 'qmuySUxTyPDt14kGayjgDzXX';
      AV.init({appId: APP_ID,appKey: APP_KEY});
    },
    // 获取数据
    fetch: function () {
      var query = new AV.Query('Message');
      return query.find() // promise对象
    },
    // 创建数据
    save: function (name, content) {
      var message = AV.Object.extend('Message');
      var messageObj = new message();
      messageObj.set('name', name);
      messageObj.set('content', content);
      return messageObj.save() // promise对象
    }
  }

  var controller = {
    view: null,
    messageList: null,
    model: null,
    myForm: null,
    initView: function (view, model) {
      this.view =  view
      this.model = model
      this.messageList = document.querySelector('#messageList')
      this.myForm = document.querySelector('#postFormMessage')
      this.model.init()
      this.loadMessages()
      this.bindEvents()
    },
    loadMessages: function () {
      var query = new AV.Query('Message');
      this.model.fetch().then((message) => {
        // 获取需要更新的 todo
        let messageArray = message.map((item) => item.attributes)
        messageArray.forEach(obj => {
          let li = document.createElement('li')
          li.innerText = `${obj.name}：${obj.content}`
          this.messageList.append(li)
        });
      });
    },
    bindEvents: function () {
      this.myForm.addEventListener('submit', (e) => {
        e.preventDefault()
        this.saveMessage()
      })
    },
    saveMessage: function() {
      let content = this.myForm.querySelector('input[name=content]').value
      let name = this.myForm.querySelector('input[name=name]').value
      if (!content) {
        alert('请输入内容')
      } else if(!name) {
        alert('请输入姓名')
      } else {
        this.model.save(name, content).then((saveObj)=> {
          let li = document.createElement('li')
          li.innerText = `${saveObj.attributes.name}：${saveObj.attributes.content}`
          this.messageList.append(li)
          this.myForm.querySelector('input[name=content]').value = ''
        })
      }
    }
  }
  controller.initView(view, model)
}.call()
