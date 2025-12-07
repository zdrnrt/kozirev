
if (document.querySelector('.js-courses-category-trigger')){
  
  function setCoursesCategory(e) {
    
    const categoryTarget = e.currentTarget.dataset.target;
    e.currentTarget.closest('.js-courses-category-list').querySelector('.tab--active').classList.remove('tab--active');
    e.currentTarget.classList.add('tab--active');

    window.coursesCategory = categoryTarget;

    if (document.querySelector('.js-courses-category-filter')){
      document.querySelector('.js-courses-category-filter').value = '';
    }

    if (categoryTarget == 'all'){
      for (const category of document.querySelectorAll(`.courses__item--hidden`)){
        category.classList.remove('courses__item--hidden');
      }
      return
    }
    
    for (const category of document.querySelectorAll(`.js-courses-category`)){
      if (category.dataset.category == categoryTarget){
        category.classList.remove('courses__item--hidden');
      } else {
        category.classList.add('courses__item--hidden');
      }
    }

  }

  for (const btn of document.querySelectorAll('.js-courses-category-trigger')){
    btn.addEventListener('click', setCoursesCategory)
  }
}

if (document.querySelector('.js-courses-category-filter')){
  function filterCoursesCategory(e){
    let categoryList = null;
    const value = e.currentTarget.value;

    if (!window.coursesCategory || window.coursesCategory == 'all'){
      categoryList = document.querySelectorAll(`.js-courses-category`);
    } else {
      categoryList = document.querySelectorAll(`.js-courses-category[data-category=${window.coursesCategory}]`);
    }

    for (const category of categoryList){
      const title = category.querySelector('.js-courses-title').textContent;
      if (!title.includes(value)){
        category.classList.add('courses__item--hidden')
      } else {
        category.classList.remove('courses__item--hidden')
      }
    }
  }

  document.querySelector('.js-courses-category-filter').addEventListener('input', filterCoursesCategory)
}