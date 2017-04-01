
class Controller {

  static eachDie() {
    $('.die').each((i, die)=> { $(die).text(Model.randomize())} )
  }
  static logger() {
    console.log('WAT')
  }
}

class View {

  static addButton() {
    $('#roller button.add').on('click', ()=> {
      View.appendDice()
    })
  }

  static rollButton() {
    $('#roller button.roll').on('click', ()=> {
      Controller.eachDie()
    })
  }

  static appendDice() {
    Controller.logger()
    $('.dice').append('<div class="die">0</div>')
  }
}

class Model {

  static randomize() {
    return Math.floor((Math.random()*6)+1)
  }
}

$(document).ready(()=> {
  View.addButton()
  View.rollButton()
})