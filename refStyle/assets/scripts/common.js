$(function() {
  /**
   * 선택된 내용들 그룹핑(보더로 묶기)
   * @param {string} groupNumber 그룹핑 number
   * @param {string} type hover | other
   * @return {void}
   */
  function setActiveBorder(groupNumber, type) {
    var borderColor = '#a37a50';
    var activeClassName = 'is-active';

    if (type) {
      switch (type) {
        case 'hover':
          borderColor = groupNumber === 2 ? '#a35071' : '#3f8ea8';
          activeClassName = groupNumber === 2 ? 'is-hover' : 'is-blue';
          break;
      }
    }

    $('[data-group=' + groupNumber + ']')
      .removeClass('is-hover')
      .addClass(activeClassName)
      .find('.table__item');

    $.each($('.box__contents'), function(index) {
      var $group = $(this).find('[data-group=' + groupNumber + ']');
      var tableItemLength = $group.length;

      if (tableItemLength > 1) {
        $group.find('.table__item').css({
          borderTop: 0,
          borderBottom: '1px solid #292d31',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        });
        $group
          .first()
          .find('.table__item')
          .css({
            borderTop: '1px solid ' + borderColor
          });

        $group
          .first()
          .find('.table__item')
          .first()
          .css({
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 0
          });
        $group
          .first()
          .find('.table__item')
          .last()
          .css({
            borderTopRightRadius: 5,
            borderBottomRightRadius: 0
          });
        $group
          .last()
          .find('.table__item')
          .first()
          .css({
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 0
          });
        $group
          .last()
          .find('.table__item')
          .last()
          .css({
            borderBottomRightRadius: 5,
            borderTopRightRadius: 0
          });

        $group
          .last()
          .find('.table__item')
          .css({
            borderBottom: '1px solid ' + borderColor
          });
      }
    });
  }
  /**
   * 선택된 내용들 그룹핑(보더 제거F)
   * @param {string} type hover | other
   * @param {string} groupNumber 그룹핑 number
   * @return {void}
   */
  function removeActiveBorder(type, groupNumber) {
    var $target = $('[data-group]');

    var activeClassName = 'is-active';

    if (type) {
      switch (type) {
        case 'hover':
          activeClassName = groupNumber === 2 ? 'is-hover' : 'is-blue';
          break;
      }
    }
    if (groupNumber) {
      $('[data-group=' + groupNumber + ']')
        .removeClass(activeClassName)
        .find('.table__item')
        .css({ borderTop: '', borderBottom: '' });
    } else {
      $target
        .removeClass(activeClassName)
        .find('.table__item')
        .css({ borderTop: '', borderBottom: '' });
    }
  }

  /**
   * 모달 열기
   * @param { string } modalName
   */
  window.openModal = function(modalName) {
    var $modal = $('[data-modal-name=' + modalName + ']');

    $('body').addClass('is-modal');
    $modal.addClass('is-open');
  };
  /**
   * 모달 닫기
   * @param { string } modalName
   */
  window.closeModal = function(modalName) {
    var $modal = $('[data-modal-name=' + modalName + ']');

    $('body').removeClass('is-modal');
    $modal.removeClass('is-open');
  };

  // 초기 페이지 접근시 Initialized
  setActiveBorder('1');

  $('.empty-box')
    .find('.box')
    .first()
    .addClass('visible');

  // Events
  $('.box').on('click', function() {
    var nextIndex = $(this).data('index') + 1;
    var $nextTarget = $('[data-index=' + nextIndex + ']');
    var boxLength = $('[data-index]').length;

    if (
      !$(this).hasClass('visible') ||
      $nextTarget.hasClass('visible') ||
      nextIndex > boxLength
    )
      return;

    $nextTarget.addClass('visible');
  });

  $('[ data-hover-target]').on('mouseenter', function() {
    if ($(this).hasClass('is-active')) return;
    setActiveBorder($(this).data('group'), 'hover');
  });
  $('[ data-hover-target]').on('mouseleave', function() {
    if ($(this).hasClass('is-active')) return;
    removeActiveBorder('hover', $(this).data('group'));
  });
  $('[data-radio-select]').on('click', function() {
    var activeClassName = 'is-selected';
    $('[data-radio-select]').removeClass(activeClassName);
    $(this)
      .addClass(activeClassName)
      .find('.radio__input')
      .prop('checked', true);
  });

  $(document).on('click', function(e) {
    if ($(e.target).find('.modal__inner').length > 0) {
      $('body').removeClass('is-modal');
      $('.modal').removeClass('is-open');
    }
  });
});
