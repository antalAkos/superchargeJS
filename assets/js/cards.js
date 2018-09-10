let  cards = {
  images: ['angular.png', 'd3.png', 'jenkins.png', 'postcss.png', 'react.png', 'redux.png', 'sass.png', 'ts.png', 'webpack.png'],

  listCards: function () {

      $('.card-columns').append(`<div class="card-body">
                                    <img style="display: none" src="../images/"`+ c +`>
                                 </div>`)
  },


    duplicateList: function(arr) {
      return arr.concat(arr);
    },
    
    suffleList: function () {
        
    }
};


