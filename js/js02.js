$(function () {
    let setFilter = $('#filterBtn'),   //所有按鈕
        filterBtn = setFilter.find('a'),//篩選按鈕中的超連結 a元素
        btnAll = $('.allItem'),         //ALL按鈕
        setList = $('#filterList'),     //所有篩選列表中的元素
        filterList = setList.find('li'), //篩選列表中的 li
        listWidth = filterList.outerWidth();  //篩選列表的寬度

    filterBtn.click(function () {
        // 檢查是否被點選狀態 不是才執行
        if (!($(this).hasClass('active'))) {
            // 目前被點選的按鈕類別 儲存到 filterClass
            let filterClass = $(this).attr('class');
            // 使用 each() 方法
            filterList.each(function () {
                // 檢查li中是否有被篩選的類別
                if ($(this).hasClass(filterClass)) {
                    // yes 顯示動畫(1.擴展寬度 2.提升透明度顯示圖片)
                    $(this).css({ dsplay: 'block' }).stop().animate({ width: listWidth }, 1000);
                    // find()方法中 使用全域選擇器 '*' 選filterList所有元素 
                    $(this).find('*').stop().animate({ opacity: '1' }, 1000);
                } else {
                    // no 顯示動畫 (隱藏項目)
                    $(this).find('*').stop().animate({ opacity: '0' }, 800);
                    $(this).stop().animate({ width: '0' }, 800, function () {
                        $(this).css({ dispaly: 'none' });
                    });
                }
            });
            filterBtn.removeClass('active');
            $(this).addClass('active');
        }
    });


    // 全部顯示
    btnAll.click(function () {
        filterList.each(function () {
            $(this).css({ display: 'block' }).stop().animate({ width: listWidth }, 1000);
            $(this).find('*').stop().animate({ opacity: '1' }, 1000);
        });
    });
    //重新載入時 讓ALL按鈕為點選狀態
    btnAll.click();


});