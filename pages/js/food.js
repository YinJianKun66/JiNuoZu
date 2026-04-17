/* === ScrollReveal 滑动显示动画 === */
/* 创建sr实例, 初始化参数options */
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 2000,
  delay: 400
});
/* 给对应的class添加动画 */

sr.reveal('.jumbotron-h1', { origin: 'left' })
sr.reveal('.jumbotron-p', { origin: 'right' })
sr.reveal('.food_title')
sr.reveal('.food_card', { delay: 800 })
sr.reveal('.guilin-intro')
