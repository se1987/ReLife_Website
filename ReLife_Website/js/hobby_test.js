//全体の囲みは即時関数です、決り文句としてこの枠内に記述を書くと他のjsの影響などを受けなくなります。
(()=>{
  'use strict';

  $(function () {
    $(".btn").on("click", function () {
        $(this).closest("div").css("display", "none");
        const id = $(this).attr("href");
        $(id).addClass("fit").show("slow");
    });
  });

})();// END
