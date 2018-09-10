let  cards = {
  images: ['angular.png', 'd3.png', 'jenkins.png', 'postcss.png', 'react.png', 'redux.png', 'sass.png', 'ts.png', 'webpack.png'],

  listCards: function () {
      let cardsArray =  this.suffleList();

      for (let c in cardsArray) {
          $('.card-columns').append(`<div class="card-body">
                                    <img style="display: none" src="../images/"`+ c +`>
                                 </div>`)
      }

  },


    duplicateList: function(arr) {
      return arr.concat(arr);
    },
    
    suffleList: function () {
        var result = [], source = this.duplicateList(this.images).concat([]);

        while (source.length) {
            let index = Math.floor(Math.random() * source.length);
            result.push(source.splice(index, 1)[0]);
        }

        return result;
    }
};


