/*
 * 条件書式の文字装飾のサンプルプログラム
 * Copyright (c) 2013 Cybozu
 *
 * Licensed under the MIT License
 */
(function() {
    "use strict";
    //レコード一覧の表示時にフィールド値の条件に応じて、文字色、フィールドの背景色を変更する
    kintone.events.on('app.record.index.show', function(event) {
        //変更する色
        var bgColor = '#fff8dc';
        //背景色を変更する場所
        var recordNo = kintone.app.getFieldElements('レコード番号');
        var entryNo = kintone.app.getFieldElements('エントリー日時');
        var name = kintone.app.getFieldElements('氏名');
        var birthday = kintone.app.getFieldElements('生年月日');
        var university = kintone.app.getFieldElements('大学');
        var affiliation = kintone.app.getFieldElements('学部');

        for (var i = 0; i < recordNo.length; i++) {
            var record = event.records[i];

            if(record['ステータス']['value'] == '内定承認'){
                recordNo[i].style.backgroundColor = bgColor;
                entryNo[i].style.backgroundColor = bgColor;
                name[i].style.backgroundColor = bgColor;
                birthday[i].style.backgroundColor = bgColor;
                university[i].style.backgroundColor = bgColor;
                affiliation[i].style.backgroundColor = bgColor;
            }
        }　
    });
})();
