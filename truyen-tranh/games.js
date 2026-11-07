/* Printed page numbers match JPEG indices: p00 is the cover. No network or accounts. */
'use strict';
window.COMIC_GAMES = (() => {
 const q=(text,answer,...other)=>({text,answer,options:[answer,...other]});
 const quiz=(...questions)=>({kind:'quiz',title:'Chơi câu đố',questions});
 const check=(title,items,safety='')=>({kind:'check',title,items,safety});
 const tips=(items)=>({kind:'tips',title:'Mẹo vui – chạm để khám phá',items});
 const name=q('Cái gì của con, nhưng người khác lại dùng nhiều hơn con?','Tên của con','Cặp sách','Hộp bút');
 const shirt=q('Cái gì có cổ mà không có đầu?','Cái áo','Con hươu','Cái bàn');
 const triangle=q('Hình gì có ba cạnh, ba góc, đứng đâu cũng vững chãi?','Hình tam giác','Hình tròn','Hình vuông');
 return {
 tap1:{
  3:[quiz(q('Ruột dài từ mũi đến chân, mũi mòn ruột cũng dần dần mòn theo. Là cái gì?','Bút chì','Thước kẻ','Cục tẩy'))],
  5:[quiz(q('Hoa gì nở giữa mùa hè, trong đầm thơm ngát, lá xòe như ô?','Hoa sen','Hoa hồng','Hoa mai'))],
  9:[quiz(q('Cây gì mỗi ngày rụng một lá, đến cuối năm chỉ còn trơ lại cái thân?','Quyển lịch (lịch bloc)','Cây chuối','Cây dừa'),shirt,name,q('Cái gì càng chia sẻ cho nhau thì lại càng nhiều thêm?','Niềm vui và tình yêu thương','Chiếc bánh','Cốc nước'))],
  10:[check('Làm thiệp nổi “Mẹ yêu”',['Gấp đôi tờ giấy bìa màu.','Ở nếp gấp, nhờ người lớn giúp cắt hai đường song song dài khoảng 3 cm.','Mở ra, đẩy phần giấy ở giữa vào trong để tạo thành một cái bậc.','Dán trái tim hoặc bông hoa lên bậc. Mở thiệp ra – hình nổi lên!'],'Nhờ người lớn giúp khi dùng kéo và keo nhé!'),tips([['Viết lời chúc ngắn','“Con yêu mẹ!” và thêm một việc con sẽ giúp mẹ: rửa chén, quét nhà, tưới cây…'],['Lò xo kẽm nhung','Quấn dây kẽm nhung quanh cây bút chì rồi rút ra để gắn hoa lên thiệp. Nhờ người lớn giúp nhé!'],['Phiếu ôm miễn phí','Kẹp vào thiệp một “phiếu ôm mẹ”. Khi mẹ mệt, mẹ đưa phiếu – con ôm mẹ thật chặt!']])]
 },
 tap2:{
  3:[quiz(q('Cái gì có răng mà không có miệng?','Cái lược','Cái cốc','Cái mũ'))],
  9:[quiz(q('Cái gì đánh cha, đánh mẹ, đánh anh, đánh chị mà ai cũng thương?','Bàn chải đánh răng','Cái trống','Cái thìa'),q('Hai anh em ở hai bên, suốt đời không bao giờ nhìn thấy nhau. Là gì?','Đôi tai','Đôi mắt','Hai bàn tay'),q('Cái gì càng lau lại càng ướt?','Cái khăn lau','Cái quạt','Cục phấn'),q('Con gì càng to lại càng nhỏ?','Con cua','Con voi','Con mèo'),q('Cái gì có răng mà không có miệng?','Cái lược','Cái ghế','Cái nồi'),q('Cái gì đi thì nằm, đứng cũng nằm, nằm lại đứng?','Bàn chân','Cái nón','Cái bút')),
   check('Em học được gì?',['Khi tức giận, em dừng lại và hít thở chậm.','Em nói “Không sao, làm lại!” thay cho lời nói xấu.','Em biết nói “Cảm ơn” và “Xin lỗi” thật lòng.'])],
  10:[check('Làm “Hũ lời hay”',['Nhờ người lớn rửa sạch một hũ nhựa hoặc lọ nhỏ. Dán nhãn “Hũ lời hay”.','Cắt giấy màu thành những ngôi sao nhỏ (hoặc gấp sao từ dải giấy).','Mỗi lần nói “Cảm ơn”, “Xin lỗi”, “Không sao, làm lại!”, em bỏ một ngôi sao vào hũ.','Cuối tuần đếm sao cùng bố mẹ. Đầy hũ là cả nhà cùng vui!'],'Nhờ người lớn giúp khi dùng kéo; ưu tiên hũ nhựa an toàn.'),tips([['Ngửi hoa – thổi nến','Hít vào thật chậm bằng mũi như ngửi bông hoa, rồi thở ra bằng miệng như thổi tắt ngọn nến tưởng tượng. Làm 3 lần. Không cần dùng nến thật nhé!'],['Đếm đến 5','Đếm thầm 1, 2, 3, 4, 5 trước khi nói. Cơn bực sẽ nhỏ lại!'],['Câu nói thần kỳ','Thử nói: “Ôi trời!”, “Tiếc quá!”, “Không sao, làm lại!” – mình có thể thử lại mà!']])]
 },
 tap3:{
  3:[quiz(shirt)],
  6:[quiz(q('Cái gì luôn ở phía trước mà mình không bao giờ nhìn thấy?','Tương lai','Cái bảng','Mặt trời'))],
  9:[quiz(q('Ban ngày thì đầy, ban đêm thì rỗng, nằm dưới gầm giường. Là cái gì?','Đôi giày (dép)','Chiếc gối','Cái chăn'),q('Con gì mang nhà đi khắp nơi, đi chậm rì mà chẳng vội vàng?','Con ốc sên','Con thỏ','Con bướm'),name,q('Cái gì mỗi năm tăng thêm một mà không bao giờ giảm?','Tuổi','Cân nặng','Số bút chì')),
   check('Em học được gì?',['Em đến sau thì đứng sau bạn, không chen lấn.','Em kiên nhẫn chờ đến lượt khi mua đồ, lên xe hoặc uống nước.','Em vui vẻ nói “Bạn lên trước đi!” với người cần giúp.'])],
  10:[check('Làm “Vé xếp hàng”',['Cắt giấy bìa màu thành những tấm vé nhỏ bằng bàn tay.','Viết số thật to lên mỗi vé: 1, 2, 3, 4… rồi vẽ thêm ngôi sao, trái tim.','Chơi bán hàng cùng bạn bè, anh chị em: ai đến trước lấy vé số nhỏ trước.','Gọi số theo thứ tự. Ai giữ trật tự, nói “Bạn lên trước đi!” được thêm một ngôi sao!'],'Nhờ người lớn giúp khi dùng kéo nhé!'),tips([['Đứng sau, không chen','Đến sau thì đứng sau bạn. Không xô đẩy, không chen ngang dù đang rất vội.'],['Chờ đến lượt','Trong lúc chờ, em đếm nhẩm, hát nhỏ một bài hoặc nghĩ xem mình sẽ mua gì.'],['Nhường người cần giúp','Bạn bị đau, em nhỏ, ông bà: em nói “Bạn lên trước đi!” thật vui vẻ.']])]
 },
 stem:{
  4:[quiz(q('Chân đứng giữa dòng, lưng cõng người qua. Là cái gì?','Cái cầu','Cái thuyền','Cái ghế'))],
  5:[tips([['Dùng kéo an toàn','Cầm mũi kéo chúc xuống đất; đưa kéo cho bạn bằng phần tay cầm. Keo nóng chỉ người lớn dùng!']])],
  7:[quiz(q('Con gì thích leo trèo, ăn chuối, đuôi dài, kêu khẹc khẹc?','Con khỉ','Con cá','Con gà'))],
  8:[tips([['Cùng làm nhóm','Mỗi bạn giỏi một việc, nhưng việc nào cũng phải giúp nhóm tiến lên. Hỏi bạn: “Tớ giúp gì được nào?”']])],
  10:[quiz(q('Cái gì dính chặt mọi thứ lại với nhau, mà chính nó lại sợ bị khô?','Keo dán','Thước kẻ','Giấy màu'))],
  11:[tips([['Ba bước xin lỗi','Nhìn bạn, nói “Tớ xin lỗi”, rồi hứa sửa sai.']])],
  14:[quiz(triangle)],
  17:[quiz(triangle,q('Cái gì bắc ngang sông, người đi qua mà không ướt chân?','Cái cầu','Cái ô','Chiếc lá'),q('“Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao” nghĩa là gì?','Đoàn kết thì làm được việc lớn','Ai cũng phải trồng đúng ba cây','Chỉ làm một mình thôi'),q('Con gì đứng thứ chín trong mười hai con giáp?','Con khỉ (tuổi Thân)','Con rồng','Con mèo'),q('Que dài 11 xăng-ti-mét, nối 3 que thì dài bao nhiêu?','33 xăng-ti-mét','14 xăng-ti-mét','22 xăng-ti-mét')),
   check('Em học được gì?',['Làm nhóm, tớ hỏi bạn: “Tớ giúp gì được nào?”','Tớ dùng điều mình giỏi để giúp cả nhóm.','Thất bại thì tớ không bỏ cuộc, tớ thử lại.','Khi chưa giúp bạn, tớ biết xin lỗi và sửa sai.','Dùng kéo, keo, tớ nhờ người lớn giúp.'])],
  18:[check('Cầu que kem tam giác',['Chuẩn bị que kem, keo sữa, kéo đầu tròn, thước, giấy, bút màu, hai chồng sách làm bờ sông.','Vẽ bản thiết kế: hai thành cầu có các que chéo hình tam giác.','Dán hai thanh dài làm sàn cầu, chờ keo khô.','Dán que chéo hai bên thành cầu theo bản vẽ.','Trang trí bằng tranh em vẽ, rồi thử đặt vật nhẹ lên (hộp bút, cục tẩy).'],'Dùng kéo và keo phải có người lớn bên cạnh. Keo nóng chỉ người lớn được dùng. Chỉ thử bằng vật nhẹ, không đứng lên mô hình!'),tips([['Chia việc rõ ràng','Trước khi làm, cả nhóm chia việc: ai đo, ai cắt, ai dán.'],['Đổi việc cho nhau','Làm một lúc thì đổi việc, ai cũng được thử.'],['Nhớ cảm ơn','Làm xong, nhớ cảm ơn bạn cùng nhóm!']])]
 }
 };
})();
