(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(7),l=a.n(n),m=(a(15),a(9)),o=a(2),s=a(3),d=a(5),c=a(4),u=(a(16),a(17),a(18),function(e){var t=e.title,a=e.description,i=e.imgUrl,n=e.imdbUrl;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:i,alt:"Film logo"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-8"},t))),r.a.createElement("div",{className:"content"},a,r.a.createElement("br",null),r.a.createElement("a",{href:n},"IMDB"))))});u.defaultProps={description:""};var p=function(e){var t=e.movies;return r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(u,Object.assign({key:e.imdbId},e))})))};p.defaultProps={movies:[]};var v=a(1),h=a.n(v),g=(a(19),{title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",titleErrorMsg:"",descriptionErrorMsg:"",imgUrlErrorMsg:"",imdbUrlErrorMsg:"",imdbIdErrorMsg:"",validationStatus:!1}),b=new RegExp(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/),w=function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state=g,e.validateForm=function(){e.setState((function(e){var t=e.title,a=e.imgUrl,i=e.imdbUrl,r=e.imdbId,n=e.titleErrorMsg,l=e.imgUrlErrorMsg,m=e.imdbUrlErrorMsg,o=e.imdbIdErrorMsg;return!t||!a||!i||!r||n||l||m||o?{validationStatus:!1}:{validationStatus:!0}}))},e.handleSubmit=function(t){t.preventDefault();var a=e.props.addMovie,i=e.state,r=i.title,n=i.description,l=i.imgUrl,m=i.imdbUrl,o=i.imdbId;i.validationStatus&&(a({title:r,description:n,imgUrl:l,imdbUrl:m,imdbId:o}),e.setState(g))},e.handleInputTitle=function(t){var a=t.target.value;e.setState({title:a,titleErrorMsg:a?"":"This field is required"}),e.validateForm()},e.handleInputDescription=function(t){var a=t.target.value;e.setState({description:a,descriptionErrorMsg:""}),e.validateForm()},e.handleInputImgUrl=function(t){var a=t.target.value;e.setState({imgUrl:a,imgUrlErrorMsg:b.test(a)?"":"This field should be a valid URL"}),e.validateForm()},e.handleInputImdbUrl=function(t){var a=t.target.value;e.setState({imdbUrl:a,imdbUrlErrorMsg:b.test(a)?"":"This field should be a valid URL"}),e.validateForm()},e.handleInputImdbId=function(t){var a=t.target.value;e.setState({imdbId:a,imdbIdErrorMsg:a?"":"This field is required"}),e.validateForm()},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,i=e.imgUrl,n=e.imdbUrl,l=e.imdbId,m=e.titleErrorMsg,o=e.descriptionErrorMsg,s=e.imgUrlErrorMsg,d=e.imdbUrlErrorMsg,c=e.imdbIdErrorMsg,u=e.validationStatus;return r.a.createElement("form",{className:"new-movie",onSubmit:this.handleSubmit},r.a.createElement("label",{className:"new-movie__label"},"title:",r.a.createElement("input",{className:h()("new-movie__input",{"new-movie__input--error":m}),type:"text",value:t,onChange:this.handleInputTitle,onBlur:this.handleInputTitle,placeholder:"Movie name"}),m&&r.a.createElement("span",{className:"new-movie__error"},m)),r.a.createElement("label",{className:"new-movie__label"},"description:",r.a.createElement("textarea",{className:"new-movie__input",type:"text",value:a,onChange:this.handleInputDescription,onBlur:this.handleInputDescription,rows:"6",placeholder:"Movie description"}),r.a.createElement("span",{className:"new-movie__error"},o)),r.a.createElement("label",{className:"new-movie__label"},"imgUrl:",r.a.createElement("input",{className:h()("new-movie__input",{"new-movie__input--error":s}),type:"text",value:i,onChange:this.handleInputImgUrl,onBlur:this.handleInputImgUrl,placeholder:"https://www.example.com"}),s&&r.a.createElement("span",{className:"new-movie__error"},s)),r.a.createElement("label",{className:"new-movie__label"},"imdbUrl:",r.a.createElement("input",{className:h()("new-movie__input",{"new-movie__input--error":d}),type:"text",value:n,onChange:this.handleInputImdbUrl,onBlur:this.handleInputImdbUrl,placeholder:"https://www.example.com"}),d&&r.a.createElement("span",{className:"new-movie__error"},d)),r.a.createElement("label",{className:"new-movie__label"},"imdbId:",r.a.createElement("input",{className:h()("new-movie__input",{"new-movie__input--error":c}),type:"text",value:l,onChange:this.handleInputImdbId,onBlur:this.handleInputImdbId,placeholder:"Movie imdb id"}),c&&r.a.createElement("span",{className:"new-movie__error"},c)),r.a.createElement("button",{className:h()("new-movie__button",{"new-movie__button--disabled":!u}),type:"submit",disabled:!u},"Add new movie"))}}]),a}(i.Component),M=a(8),E=function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={movies:M},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(m.a)(e.movies),[t])}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"page-content"},r.a.createElement(p,{movies:e})),r.a.createElement("div",{className:"sidebar"},r.a.createElement(w,{addMovie:this.addMovie})))}}]),a}(i.Component);l.a.render(r.a.createElement(E,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.9acb5087.chunk.js.map