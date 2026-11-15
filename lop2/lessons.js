window.LESSON_DATA={title:'Vui học lớp 2',intro:'Chọn môn học, làm từng câu rồi xem lời giải ngắn nhé! Bài luyện theo tuần, bám SGK Kết nối tri thức.',subjects:[
{name:'🔢 Toán',desc:'Theo SGK Toán 2 Kết nối tri thức, chia theo tuần.',units:[
{title:'Tuần 1 — Ôn tập các số đến 100 — Tia số, số liền trước, số liền sau',questions:[
{prompt:'Số liền trước của 67 là số nào?',options:['65','66','68'],answer:1,why:'Đếm lùi 1 số trước 67 được 66.'},
{prompt:'Số 85 gồm mấy chục và mấy đơn vị?',options:['5 chục và 8 đơn vị','8 chục và 15 đơn vị','8 chục và 5 đơn vị'],answer:2,why:'Số 85 có chữ số 8 ở hàng chục và chữ số 5 ở hàng đơn vị.'},
{prompt:'Trong các số 42, 78, 36, số nào lớn nhất?',options:['78','42','36'],answer:0,why:'So sánh hàng chục: 7 lớn hơn 4 và 3 nên 78 lớn nhất.'},
{type:'fill',prompt:'Số liền sau của 89 là ___.',answerText:'90',why:'Đếm thêm 1 sau 89 được 90.'},
{type:'tf',prompt:'Số 76 gồm 7 chục và 6 đơn vị.',options:['Đúng','Sai'],answer:0,why:'Số 76 có chữ số 7 ở hàng chục và chữ số 6 ở hàng đơn vị.'}
]},
{title:'Tuần 2 — Các thành phần của phép cộng, phép trừ — Hơn kém nhau bao nhiêu',questions:[
{prompt:'Trong phép tính 14 + 5 = 19, số 14 được gọi là gì?',options:['Tổng','Số bị trừ','Số hạng'],answer:2,why:'Trong phép cộng, các số được cộng gọi là số hạng, kết quả gọi là tổng.'},
{prompt:'Lớp em có 26 bạn, lớp bạn có 22 bạn. Lớp em hơn lớp bạn bao nhiêu bạn?',options:['4 bạn','3 bạn','5 bạn'],answer:0,why:'Lấy 26 − 22 = 4 bạn.'},
{prompt:'Trong phép tính 20 − 6 = 14, số 6 được gọi là gì?',options:['Số bị trừ','Số trừ','Hiệu'],answer:1,why:'Trong phép trừ, số bị lấy đi gọi là số trừ; kết quả gọi là hiệu.'},
{type:'fill',prompt:'Trong phép tính 15 + 4 = 19, số 19 được gọi là ___.',answerText:'tổng',why:'Trong phép cộng, kết quả của phép tính được gọi là tổng.',accept:['tổng','Tổng']},
{type:'tf',prompt:'Trong phép tính 20 − 6 = 14, số 20 được gọi là số trừ.',options:['Đúng','Sai'],answer:1,why:'Sai. Số 20 là số bị trừ; số 6 mới là số trừ.'}
]},
{title:'Tuần 3 — Ôn tập phép cộng, phép trừ (không nhớ) trong phạm vi 100',questions:[
{prompt:'Đặt tính rồi tính: 53 + 24 được bao nhiêu?',options:['77','67','87'],answer:0,why:'Cộng không nhớ: 3 + 4 = 7, 5 + 2 = 7, được 77.'},
{prompt:'96 − 35 bằng bao nhiêu?',options:['71','61','54'],answer:1,why:'Trừ không nhớ: 6 − 5 = 1, 9 − 3 = 6, được 61.'},
{prompt:'Điền dấu thích hợp: 45 + 20 ___ 70',options:['>','=','<'],answer:2,why:'45 + 20 = 65, mà 65 bé hơn 70 nên điền dấu <.'},
{type:'fill',prompt:'Tính: 64 + 25 = ___',answerText:'89',why:'Cộng không nhớ: 4 + 5 = 9, 6 + 2 = 8, được 89.'},
{type:'tf',prompt:'75 − 32 = 43.',options:['Đúng','Sai'],answer:0,why:'Đúng. 5 − 2 = 3, 7 − 3 = 4, được 43.'}
]},
{title:'Tuần 4 — Phép cộng (qua 10) trong phạm vi 20',questions:[
{prompt:'9 + 5 bằng bao nhiêu?',options:['13','14','15'],answer:1,why:'Tách 5 thành 1 và 4: 9 + 1 = 10, 10 + 4 = 14.'},
{prompt:'8 + 7 bằng bao nhiêu?',options:['14','16','15'],answer:2,why:'Tách 7 thành 2 và 5: 8 + 2 = 10, 10 + 5 = 15.'},
{prompt:'Có 9 quả cam, mẹ mua thêm 6 quả. Có tất cả bao nhiêu quả cam?',options:['15 quả','14 quả','16 quả'],answer:0,why:'9 + 6 = 15 quả cam.'},
{type:'fill',prompt:'Tính: 8 + 6 = ___',answerText:'14',why:'Tách 6 thành 2 và 4: 8 + 2 = 10, 10 + 4 = 14.'},
{type:'tf',prompt:'9 + 4 = 12.',options:['Đúng','Sai'],answer:1,why:'Sai. 9 + 4 = 13 (tách 4 thành 1 và 3: 9 + 1 = 10, 10 + 3 = 13).'}
]},
{title:'Tuần 5 — Bảng cộng (qua 10) — Bài toán về thêm, bớt một số đơn vị',questions:[
{prompt:'7 + 8 bằng bao nhiêu?',options:['13','17','15'],answer:2,why:'Theo bảng cộng qua 10: 7 + 8 = 15.'},
{prompt:'Lan có 12 cái kẹo, Lan được cho thêm 5 cái. Lan có bao nhiêu cái kẹo?',options:['17 cái','16 cái','18 cái'],answer:0,why:'Bài toán về thêm: 12 + 5 = 17 cái kẹo.'},
{prompt:'Trên cây có 15 con chim, bay đi 4 con. Hỏi còn lại mấy con chim trên cây?',options:['10 con','11 con','12 con'],answer:1,why:'Bài toán về bớt: 15 − 4 = 11 con chim.'},
{type:'fill',prompt:'Tính: 6 + 9 = ___',answerText:'15',why:'Theo bảng cộng qua 10: 6 + 9 = 15.'},
{type:'tf',prompt:'Lan có 12 cái kẹo, mẹ cho thêm 3 cái. Vậy Lan có tất cả 15 cái kẹo.',options:['Đúng','Sai'],answer:0,why:'Đúng. 12 + 3 = 15 cái kẹo.'}
]},
{title:'Tuần 6 — Phép trừ (qua 10) trong phạm vi 20',questions:[
{prompt:'13 − 5 bằng bao nhiêu?',options:['8','7','9'],answer:0,why:'Tách: 13 − 3 = 10, 10 − 2 = 8.'},
{prompt:'17 − 9 bằng bao nhiêu?',options:['7','8','9'],answer:1,why:'Theo bảng trừ qua 10: 17 − 9 = 8.'},
{prompt:'14 − 6 bằng bao nhiêu?',options:['6','10','8'],answer:2,why:'Tách: 14 − 4 = 10, 10 − 2 = 8.'},
{type:'fill',prompt:'Tính: 14 − 7 = ___',answerText:'7',why:'Tách: 14 − 4 = 10, 10 − 3 = 7.'},
{type:'tf',prompt:'15 − 6 = 9.',options:['Đúng','Sai'],answer:0,why:'Đúng. Theo bảng trừ qua 10: 15 − 6 = 9.'}
]},
{title:'Tuần 7 — Bảng trừ (qua 10) — Bài toán về nhiều hơn, ít hơn một số đơn vị',questions:[
{prompt:'16 − 8 bằng bao nhiêu?',options:['7','8','9'],answer:1,why:'Theo bảng trừ qua 10: 16 − 8 = 8.'},
{prompt:'An có 15 viên bi, Bình có ít hơn An 6 viên. Bình có bao nhiêu viên bi?',options:['8 viên','21 viên','9 viên'],answer:2,why:'Bài toán về ít hơn: 15 − 6 = 9 viên bi.'},
{prompt:'Chị có 8 bông hoa, em có nhiều hơn chị 5 bông. Em có bao nhiêu bông hoa?',options:['13 bông','12 bông','14 bông'],answer:0,why:'Bài toán về nhiều hơn: 8 + 5 = 13 bông hoa.'},
{type:'fill',prompt:'Tính: 17 − 9 = ___',answerText:'8',why:'Theo bảng trừ qua 10: 17 − 9 = 8.'},
{type:'tf',prompt:'An có 15 viên bi, Bình có 9 viên bi. Vậy An có nhiều hơn Bình 5 viên bi.',options:['Đúng','Sai'],answer:1,why:'Sai. 15 − 9 = 6, An có nhiều hơn Bình 6 viên bi.'}
]},
{title:'Tuần 8 — Luyện tập chung — Làm quen với Ki-lô-gam',questions:[
{prompt:'Quả dưa hấu nặng 4 kg, nhẹ hơn hay nặng hơn 6 kg?',options:['Nặng hơn','Bằng nhau','Nhẹ hơn'],answer:2,why:'4 kg bé hơn 6 kg nên quả dưa nhẹ hơn 6 kg.'},
{prompt:'Một bao gạo nặng 10 kg, một bao ngô nặng 7 kg. Cả hai bao nặng bao nhiêu ki-lô-gam?',options:['17 kg','16 kg','18 kg'],answer:0,why:'10 + 7 = 17 kg.'},
{prompt:'12 − 4 bằng bao nhiêu?',options:['7','8','9'],answer:1,why:'Theo bảng trừ qua 10: 12 − 4 = 8.'},
{type:'fill',prompt:'Bao gạo nặng 5 kg, bao ngô nặng 3 kg. Cả hai bao nặng ___ kg.',answerText:'8',why:'Cả hai bao nặng: 5 + 3 = 8 kg.'},
{type:'tf',prompt:'Con mèo nặng 12 kg thì nặng hơn con chó nặng 10 kg.',options:['Đúng','Sai'],answer:0,why:'Đúng. 12 kg lớn hơn 10 kg nên con mèo nặng hơn.'}
]},
{title:'Tuần 9 — Ki-lô-gam — Lít',questions:[
{prompt:'Một chai đựng 2 lít nước, 3 chai như thế đựng bao nhiêu lít nước?',options:['6 lít','5 lít','7 lít'],answer:0,why:'2 + 2 + 2 = 6 lít nước.'},
{prompt:'Mẹ mua con gà nặng 3 kg và con vịt nặng 2 kg. Cả hai con nặng bao nhiêu ki-lô-gam?',options:['4 kg','5 kg','6 kg'],answer:1,why:'3 + 2 = 5 kg.'},
{prompt:'Thùng có 18 lít dầu, rót ra 5 lít. Trong thùng còn bao nhiêu lít dầu?',options:['12 lít','14 lít','13 lít'],answer:2,why:'18 − 5 = 13 lít dầu.'},
{type:'fill',prompt:'Một can đựng 5 lít nước, đổ thêm 4 lít nữa thì can có ___ lít nước.',answerText:'9',why:'Can có: 5 + 4 = 9 lít nước.'},
{type:'tf',prompt:'Một chai 1 lít đựng được nhiều nước hơn một can 4 lít.',options:['Đúng','Sai'],answer:1,why:'Sai. 1 lít ít hơn 4 lít nên chai đựng được ít nước hơn can.'}
]},
{title:'Tuần 10 — Phép cộng (có nhớ) số có hai chữ số với số có một chữ số',questions:[
{prompt:'46 + 7 bằng bao nhiêu?',options:['43','53','63'],answer:1,why:'6 + 7 = 13, viết 3 nhớ 1; 4 + 1 (nhớ) = 5. Được 53.'},
{prompt:'58 + 5 bằng bao nhiêu?',options:['53','73','63'],answer:2,why:'8 + 5 = 13, viết 3 nhớ 1; 5 + 1 (nhớ) = 6. Được 63.'},
{prompt:'Có 37 bạn học sinh, thêm 6 bạn nữa đến lớp. Lớp có bao nhiêu bạn?',options:['43 bạn','42 bạn','44 bạn'],answer:0,why:'37 + 6 = 43 bạn.'},
{type:'fill',prompt:'Tính: 35 + 8 = ___',answerText:'43',why:'5 + 8 = 13, viết 3 nhớ 1; 3 + 1 (nhớ) = 4. Được 43.'},
{type:'tf',prompt:'47 + 5 = 52.',options:['Đúng','Sai'],answer:0,why:'Đúng. 7 + 5 = 12, viết 2 nhớ 1; 4 + 1 (nhớ) = 5. Được 52.'}
]},
{title:'Tuần 11 — Phép cộng (có nhớ) số có hai chữ số với số có hai chữ số',questions:[
{prompt:'36 + 27 bằng bao nhiêu?',options:['53','63','73'],answer:1,why:'36 + 20 = 56, rồi cộng thêm 7 được 63.'},
{prompt:'27 + 35 bằng bao nhiêu?',options:['62','52','72'],answer:0,why:'7 + 5 = 12, viết 2 nhớ 1; 2 + 3 + 1 (nhớ) = 6. Được 62.'},
{prompt:'Mẹ mua 48 quả trứng, bà cho thêm 26 quả. Có tất cả bao nhiêu quả trứng?',options:['64 quả','74 quả','84 quả'],answer:1,why:'48 + 26 = 74 quả trứng.'},
{type:'fill',prompt:'Tính: 48 + 36 = ___',answerText:'84',why:'8 + 6 = 14, viết 4 nhớ 1; 4 + 3 + 1 (nhớ) = 8. Được 84.'},
{type:'tf',prompt:'57 + 28 = 75.',options:['Đúng','Sai'],answer:1,why:'Sai. 57 + 28 = 85 (7 + 8 = 15, viết 5 nhớ 1; 5 + 2 + 1 = 8).'}
]},
{title:'Tuần 12 — Phép trừ (có nhớ) số có hai chữ số với số có một chữ số',questions:[
{prompt:'53 − 6 bằng bao nhiêu?',options:['47','46','57'],answer:0,why:'13 − 6 = 7 (mượn 1 chục), 4 − 0 = 4. Được 47.'},
{prompt:'72 − 8 bằng bao nhiêu?',options:['63','64','74'],answer:1,why:'12 − 8 = 4 (mượn 1 chục), 6 − 0 = 6. Được 64.'},
{prompt:'Có 85 quyển vở, bán đi 9 quyển. Còn lại bao nhiêu quyển vở?',options:['75 quyển','77 quyển','76 quyển'],answer:2,why:'85 − 9 = 76 quyển vở.'},
{type:'fill',prompt:'Tính: 62 − 7 = ___',answerText:'55',why:'12 − 7 = 5 (mượn 1 chục), còn 5 − 0 = 5. Được 55.'},
{type:'tf',prompt:'84 − 9 = 75.',options:['Đúng','Sai'],answer:0,why:'Đúng. 14 − 9 = 5 (mượn 1 chục), còn 7 − 0 = 7. Được 75.'}
]},
{title:'Tuần 13 — Phép trừ (có nhớ) số có hai chữ số với số có hai chữ số',questions:[
{prompt:'82 − 45 bằng bao nhiêu?',options:['37','47','43'],answer:0,why:'Mượn 1 chục: 12 − 5 = 7, còn 7 − 4 = 3.'},
{prompt:'64 − 28 bằng bao nhiêu?',options:['35','46','36'],answer:2,why:'14 − 8 = 6 (mượn 1 chục), 5 − 2 = 3. Được 36.'},
{prompt:'91 − 54 bằng bao nhiêu?',options:['37','36','47'],answer:0,why:'11 − 4 = 7 (mượn 1 chục), 8 − 5 = 3. Được 37.'},
{type:'fill',prompt:'Tính: 91 − 58 = ___',answerText:'33',why:'11 − 8 = 3 (mượn 1 chục); 8 − 5 = 3. Được 33.'},
{type:'tf',prompt:'73 − 46 = 37.',options:['Đúng','Sai'],answer:1,why:'Sai. 73 − 46 = 27 (13 − 6 = 7 khi mượn 1 chục; 6 − 4 = 2).'}
]},
{title:'Tuần 14 — Điểm, đoạn thẳng, đường thẳng — Đường gấp khúc, hình tứ giác',questions:[
{prompt:'Hình chữ nhật có bao nhiêu góc?',options:['3 góc','4 góc','5 góc'],answer:1,why:'Hình chữ nhật có 4 góc vuông.'},
{prompt:'Đoạn thẳng AB dài 6 cm, đoạn thẳng CD dài 4 cm. Đoạn thẳng nào dài hơn?',options:['Đoạn thẳng AB','Đoạn thẳng CD','Hai đoạn bằng nhau'],answer:0,why:'6 cm lớn hơn 4 cm nên đoạn thẳng AB dài hơn.'},
{prompt:'Hình tứ giác có bao nhiêu cạnh?',options:['3 cạnh','4 cạnh','5 cạnh'],answer:1,why:'Hình tứ giác có 4 cạnh và 4 góc.'},
{type:'fill',prompt:'Hình tam giác có ___ cạnh.',answerText:'3',why:'Hình tam giác có 3 cạnh và 3 góc.'},
{type:'tf',prompt:'Hình tứ giác có 5 cạnh.',options:['Đúng','Sai'],answer:1,why:'Sai. Hình tứ giác có 4 cạnh.'}
]},
{title:'Tuần 15 — Thực hành gấp, cắt, ghép hình — Ngày, giờ, giờ, phút',questions:[
{prompt:'Đồng hồ chỉ 7 giờ. Kim ngắn chỉ số mấy?',options:['Số 7','Số 12','Số 6'],answer:0,why:'Khi đồng hồ chỉ giờ đúng, kim ngắn chỉ đúng số giờ, tức số 7.'},
{prompt:'Một ngày có bao nhiêu giờ?',options:['12 giờ','24 giờ','60 giờ'],answer:1,why:'Một ngày đêm có 24 giờ.'},
{prompt:'Em đi học lúc 7 giờ sáng, đó là mấy giờ?',options:['19 giờ','17 giờ','7 giờ'],answer:2,why:'Buổi sáng lúc đến trường là 7 giờ.'},
{type:'fill',prompt:'Đồng hồ chỉ 9 giờ thì kim ngắn chỉ số ___.',answerText:'9',why:'Khi đồng hồ chỉ giờ đúng, kim ngắn chỉ đúng số giờ, tức số 9.'},
{type:'tf',prompt:'Kim dài chỉ số 12, kim ngắn chỉ số 8 thì đồng hồ chỉ 8 giờ.',options:['Đúng','Sai'],answer:0,why:'Đúng. Kim dài chỉ số 12 là giờ đúng, kim ngắn chỉ số 8 nên là 8 giờ.'}
]},
{title:'Tuần 16 — Ngày, tháng — Thực hành xem đồng hồ, xem lịch',questions:[
{prompt:'Một tuần có bao nhiêu ngày?',options:['5 ngày','7 ngày','10 ngày'],answer:1,why:'Một tuần có 7 ngày.'},
{prompt:'Tháng 1 có bao nhiêu ngày?',options:['30 ngày','28 ngày','31 ngày'],answer:2,why:'Tháng 1 là tháng đủ, có 31 ngày.'},
{prompt:'Hôm nay là thứ Ba, ngày mai là thứ mấy?',options:['Thứ Tư','Thứ Năm','Thứ Hai'],answer:0,why:'Sau thứ Ba là thứ Tư.'},
{type:'fill',prompt:'Tháng 1 có ___ ngày.',answerText:'31',why:'Tháng 1 là tháng có 31 ngày.'},
{type:'tf',prompt:'Một tuần có 8 ngày.',options:['Đúng','Sai'],answer:1,why:'Sai. Một tuần có 7 ngày.'}
]},
{title:'Tuần 17 — Ôn tập phép cộng, phép trừ trong phạm vi 20 và 100',questions:[
{prompt:'11 + 8 bằng bao nhiêu?',options:['18','20','19'],answer:2,why:'Ôn phép cộng trong phạm vi 20: 11 + 8 = 19.'},
{prompt:'45 + 38 bằng bao nhiêu?',options:['83','73','92'],answer:0,why:'5 + 8 = 13, viết 3 nhớ 1; 4 + 3 + 1 (nhớ) = 8. Được 83.'},
{prompt:'73 − 29 bằng bao nhiêu?',options:['54','44','37'],answer:1,why:'13 − 9 = 4 (mượn 1 chục), 6 − 2 = 4. Được 44.'},
{type:'fill',prompt:'Tính: 58 + 30 = ___',answerText:'88',why:'8 + 0 = 8, 5 + 3 = 8. Được 88.'},
{type:'tf',prompt:'96 − 24 = 72.',options:['Đúng','Sai'],answer:0,why:'Đúng. 6 − 4 = 2, 9 − 2 = 7. Được 72.'}
]},
{title:'Tuần 18 — Ôn tập hình phẳng — Ôn tập đo lường — Ôn tập chung học kì 1',questions:[
{prompt:'Hình vuông có bao nhiêu cạnh bằng nhau?',options:['4 cạnh bằng nhau','2 cạnh bằng nhau','3 cạnh bằng nhau'],answer:0,why:'Hình vuông có 4 cạnh đều bằng nhau.'},
{prompt:'Can đựng 5 lít, chai đựng 2 lít. Can đựng nhiều hơn chai bao nhiêu lít?',options:['2 lít','3 lít','7 lít'],answer:1,why:'5 − 2 = 3 lít.'},
{prompt:'34 + 29 bằng bao nhiêu?',options:['53','72','63'],answer:2,why:'4 + 9 = 13, viết 3 nhớ 1; 3 + 2 + 1 (nhớ) = 6. Được 63.'},
{type:'fill',prompt:'Điền số thích hợp: 1 m = ___ cm.',answerText:'100',why:'1 mét bằng 100 xăng-ti-mét.'},
{type:'tf',prompt:'Hình vuông có 4 cạnh bằng nhau.',options:['Đúng','Sai'],answer:0,why:'Đúng. Bốn cạnh của hình vuông đều bằng nhau.'}
]},
{title:'Tuần 19 — Phép nhân — Thừa số, tích',questions:[
{prompt:'2 + 2 + 2 + 2 bằng bao nhiêu?',options:['6','8','10'],answer:1,why:'Bốn số 2 cộng lại: 2 + 2 + 2 + 2 = 8, tức là 2 × 4 = 8.'},
{prompt:'Trong phép tính 3 × 4 = 12, số 12 được gọi là gì?',options:['Thừa số','Tổng','Tích'],answer:2,why:'Trong phép nhân, các số được nhân là thừa số, kết quả là tích.'},
{prompt:'Mỗi hộp có 4 chiếc bút, 3 hộp có bao nhiêu chiếc bút?',options:['12 chiếc','10 chiếc','14 chiếc'],answer:0,why:'4 × 3 = 12 chiếc bút.'},
{type:'fill',prompt:'Điền số thích hợp: 3 + 3 + 3 = 3 × ___',answerText:'3',why:'Số 3 được cộng 3 lần nên 3 + 3 + 3 = 3 × 3.'},
{type:'tf',prompt:'Trong phép tính 2 × 5 = 10, số 10 được gọi là tích.',options:['Đúng','Sai'],answer:0,why:'Đúng. Kết quả của phép nhân gọi là tích.'}
]},
{title:'Tuần 20 — Bảng nhân 2 — Bảng nhân 5 — Làm quen với phép chia',questions:[
{prompt:'5 × 3 bằng bao nhiêu?',options:['8','15','20'],answer:1,why:'5 × 3 là 5 được lấy 3 lần: 5 + 5 + 5 = 15.'},
{prompt:'2 × 7 bằng bao nhiêu?',options:['14','12','16'],answer:0,why:'2 × 7 là 2 được lấy 7 lần, bằng 14.'},
{prompt:'Có 12 cái kẹo chia đều cho 2 bạn. Mỗi bạn được mấy cái kẹo?',options:['5 cái','6 cái','7 cái'],answer:1,why:'Làm quen với phép chia: 12 : 2 = 6 cái kẹo.'},
{type:'fill',prompt:'Tính: 2 × 6 = ___',answerText:'12',why:'Theo bảng nhân 2: 2 × 6 = 12.'},
{type:'tf',prompt:'5 × 4 = 25.',options:['Đúng','Sai'],answer:1,why:'Sai. Theo bảng nhân 5: 5 × 4 = 20.'}
]},
{title:'Tuần 21 — Số bị chia, số chia, thương — Bảng chia 2',questions:[
{prompt:'Trong phép tính 18 : 3 = 6, số 18 được gọi là gì?',options:['Số bị chia','Số chia','Thương'],answer:0,why:'Trong phép chia, số được chia gọi là số bị chia, kết quả gọi là thương.'},
{prompt:'14 : 2 bằng bao nhiêu?',options:['6','7','8'],answer:1,why:'Vì 2 × 7 = 14 nên 14 : 2 = 7.'},
{prompt:'20 : 5 bằng bao nhiêu?',options:['3','5','4'],answer:2,why:'Vì 5 × 4 = 20 nên 20 : 5 = 4.'},
{type:'fill',prompt:'Tính: 16 : 2 = ___',answerText:'8',why:'Kiểm tra ngược: 8 × 2 = 16 nên 16 : 2 = 8.'},
{type:'tf',prompt:'Trong phép tính 20 : 5 = 4, số 5 được gọi là thương.',options:['Đúng','Sai'],answer:1,why:'Sai. Số 5 là số chia; số 4 mới là thương.'}
]},
{title:'Tuần 22 — Bảng chia 5 — Luyện tập chung phép nhân, phép chia',questions:[
{prompt:'25 : 5 bằng bao nhiêu?',options:['4','5','6'],answer:1,why:'Vì 5 × 5 = 25 nên 25 : 5 = 5.'},
{prompt:'10 : 2 bằng bao nhiêu?',options:['4','6','5'],answer:2,why:'Vì 2 × 5 = 10 nên 10 : 2 = 5.'},
{prompt:'Mỗi bàn có 5 bạn, 4 bàn có bao nhiêu bạn?',options:['20 bạn','18 bạn','22 bạn'],answer:0,why:'5 × 4 = 20 bạn.'},
{type:'fill',prompt:'Tính: 30 : 5 = ___',answerText:'6',why:'Kiểm tra ngược: 6 × 5 = 30 nên 30 : 5 = 6.'},
{type:'tf',prompt:'45 : 5 = 9.',options:['Đúng','Sai'],answer:0,why:'Đúng. Vì 9 × 5 = 45 nên 45 : 5 = 9.'}
]},
{title:'Tuần 23 — Khối trụ, khối cầu — Luyện tập chung',questions:[
{prompt:'Vật nào sau đây có dạng khối cầu?',options:['Hộp sữa','Viên gạch','Quả bóng'],answer:2,why:'Quả bóng tròn đều, có dạng khối cầu.'},
{prompt:'Lon nước ngọt thường có dạng hình gì?',options:['Khối trụ','Khối cầu','Hình vuông'],answer:0,why:'Lon nước có hai mặt đáy tròn, thân cong — đó là khối trụ.'},
{prompt:'5 × 6 bằng bao nhiêu?',options:['25','30','35'],answer:1,why:'5 × 6 là 5 được lấy 6 lần, bằng 30.'},
{type:'fill',prompt:'Quả bóng có dạng khối ___.',answerText:'cầu',why:'Quả bóng tròn đều, có dạng khối cầu.',accept:['cầu','Cầu']},
{type:'tf',prompt:'Hộp sữa có dạng khối cầu.',options:['Đúng','Sai'],answer:1,why:'Sai. Hộp sữa có dạng khối hộp chữ nhật, không phải khối cầu.'}
]},
{title:'Tuần 24 — Đơn vị, chục, trăm, nghìn — Các số tròn trăm, tròn chục',questions:[
{prompt:'Số 300 đọc là gì?',options:['Ba trăm','Ba mươi','Ba nghìn'],answer:0,why:'Số 300 có 3 trăm nên đọc là ba trăm.'},
{prompt:'Số tròn chục liền sau 460 là số nào?',options:['450','470','480'],answer:1,why:'Đếm thêm 1 chục sau 460 được 470.'},
{prompt:'1 nghìn bằng bao nhiêu trăm?',options:['100 trăm','5 trăm','10 trăm'],answer:2,why:'1 nghìn = 10 trăm.'},
{type:'fill',prompt:'Số 500 gồm ___ trăm.',answerText:'5',why:'Số 500 có chữ số 5 ở hàng trăm nên gồm 5 trăm.'},
{type:'tf',prompt:'Số 700 đọc là “bảy mươi”.',options:['Đúng','Sai'],answer:1,why:'Sai. Số 700 đọc là “bảy trăm”.'}
]},
{title:'Tuần 25 — So sánh các số tròn trăm, tròn chục — Số có ba chữ số',questions:[
{prompt:'Số liền sau của 499 là số nào?',options:['498','500','501'],answer:1,why:'Đếm thêm 1 sau 499 được 500.'},
{prompt:'Số 372 gồm mấy trăm, mấy chục, mấy đơn vị?',options:['3 trăm, 2 chục, 7 đơn vị','7 trăm, 3 chục, 2 đơn vị','3 trăm, 7 chục, 2 đơn vị'],answer:2,why:'Số 372: chữ số 3 ở hàng trăm, 7 ở hàng chục, 2 ở hàng đơn vị.'},
{prompt:'Điền dấu thích hợp: 500 ___ 450',options:['>','<','='],answer:0,why:'500 lớn hơn 450 nên điền dấu >.'},
{type:'fill',prompt:'Số liền trước của 300 là ___.',answerText:'299',why:'Đếm lùi 1 số trước 300 được 299.'},
{type:'tf',prompt:'Số 450 lớn hơn số 540.',options:['Đúng','Sai'],answer:1,why:'Sai. Hàng trăm: 4 nhỏ hơn 5 nên 450 nhỏ hơn 540.'}
]},
{title:'Tuần 26 — Viết số thành tổng các trăm, chục, đơn vị — So sánh các số có ba chữ số',questions:[
{prompt:'Viết số 648 thành tổng các trăm, chục, đơn vị.',options:['600 + 80 + 4','60 + 40 + 8','600 + 40 + 8'],answer:2,why:'648 = 6 trăm + 4 chục + 8 đơn vị = 600 + 40 + 8.'},
{prompt:'Số nào lớn hơn: 587 hay 578?',options:['587','578','Hai số bằng nhau'],answer:0,why:'Hàng chục: 8 lớn hơn 7 nên 587 lớn hơn 578.'},
{prompt:'Số bé nhất trong các số 305, 350, 503 là số nào?',options:['350','305','503'],answer:1,why:'Hàng trăm đều là 3 hoặc 5; 305 có hàng trăm là 3 và hàng chục 0, bé nhất.'},
{type:'fill',prompt:'Điền số thích hợp: 372 = 300 + ___ + 2.',answerText:'70',why:'Số 372 gồm 3 trăm, 7 chục và 2 đơn vị nên 372 = 300 + 70 + 2.'},
{type:'tf',prompt:'Số 685 = 600 + 80 + 5.',options:['Đúng','Sai'],answer:0,why:'Đúng. 685 gồm 6 trăm, 8 chục và 5 đơn vị.'}
]},
{title:'Tuần 27 — Đề-xi-mét, mét, ki-lô-mét — Giới thiệu tiền Việt Nam',questions:[
{prompt:'1 mét bằng bao nhiêu đề-xi-mét?',options:['10 dm','100 dm','5 dm'],answer:0,why:'1 m = 10 dm.'},
{prompt:'Đổi: 2 m = … cm. Điền số thích hợp.',options:['20 cm','200 cm','2000 cm'],answer:1,why:'1 m = 100 cm nên 2 m = 200 cm.'},
{prompt:'Tờ tiền nào có mệnh giá mười nghìn đồng?',options:['Tờ 1.000 đồng','Tờ 500.000 đồng','Tờ 10.000 đồng'],answer:2,why:'Tiền Việt Nam có tờ mệnh giá 10.000 đồng.'},
{type:'fill',prompt:'Điền số thích hợp: 1 m = ___ dm.',answerText:'10',why:'1 mét bằng 10 đề-xi-mét.'},
{type:'tf',prompt:'Tờ tiền 1 000 đồng có giá trị lớn hơn tờ tiền 500 đồng.',options:['Đúng','Sai'],answer:0,why:'Đúng. 1 000 đồng lớn hơn 500 đồng.'}
]},
{title:'Tuần 28 — Thực hành đo độ dài — Phép cộng (không nhớ) trong phạm vi 1000',questions:[
{prompt:'Một sợi dây dài 1 m, cắt đi 30 cm. Sợi dây còn dài bao nhiêu xăng-ti-mét?',options:['60 cm','70 cm','80 cm'],answer:1,why:'1 m = 100 cm; 100 − 30 = 70 cm.'},
{prompt:'235 + 142 bằng bao nhiêu?',options:['367','387','377'],answer:2,why:'Cộng không nhớ từng hàng: 5+2=7, 3+4=7, 2+1=3. Được 377.'},
{prompt:'468 + 21 bằng bao nhiêu?',options:['489','479','499'],answer:0,why:'Cộng không nhớ: 8+1=9, 6+2=8, 4+0=4. Được 489.'},
{type:'fill',prompt:'Tính: 245 + 132 = ___',answerText:'377',why:'Cộng không nhớ: 5 + 2 = 7, 4 + 3 = 7, 2 + 1 = 3. Được 377.'},
{type:'tf',prompt:'Đoạn dây dài 2 m thì dài hơn đoạn dây dài 150 cm.',options:['Đúng','Sai'],answer:0,why:'Đúng. 2 m = 200 cm, mà 200 cm dài hơn 150 cm.'}
]},
{title:'Tuần 29 — Phép cộng (có nhớ) trong phạm vi 1000 — Phép trừ (không nhớ) trong phạm vi 1000',questions:[
{prompt:'376 + 148 bằng bao nhiêu?',options:['514','534','524'],answer:2,why:'6+8=14 viết 4 nhớ 1; 7+4+1=12 viết 2 nhớ 1; 3+1+1=5. Được 524.'},
{prompt:'657 − 234 bằng bao nhiêu?',options:['423','413','433'],answer:0,why:'Trừ không nhớ từng hàng: 7−4=3, 5−3=2, 6−2=4. Được 423.'},
{prompt:'Vườn có 542 cây, trồng thêm 175 cây. Vườn có bao nhiêu cây?',options:['707 cây','717 cây','727 cây'],answer:1,why:'542 + 175 = 717 cây.'},
{type:'fill',prompt:'Tính: 457 + 268 = ___',answerText:'725',why:'7 + 8 = 15 viết 5 nhớ 1; 5 + 6 + 1 = 12 viết 2 nhớ 1; 4 + 2 + 1 = 7. Được 725.'},
{type:'tf',prompt:'986 − 342 = 644.',options:['Đúng','Sai'],answer:0,why:'Đúng. Trừ không nhớ từng hàng: 6 − 2 = 4, 8 − 4 = 4, 9 − 3 = 6. Được 644.'}
]},
{title:'Tuần 30 — Phép trừ (có nhớ) trong phạm vi 1000',questions:[
{prompt:'725 − 348 bằng bao nhiêu?',options:['377','367','387'],answer:0,why:'15−8=7 (mượn); 11−4=7 (mượn tiếp); 6−3=3. Được 377.'},
{prompt:'913 − 456 bằng bao nhiêu?',options:['447','457','467'],answer:1,why:'13−6=7 (mượn); 10−5=5 (đã cho mượn); 8−4=4. Được 457.'},
{prompt:'Một cửa hàng có 680 kg gạo, bán đi 295 kg. Cửa hàng còn bao nhiêu ki-lô-gam gạo?',options:['375 kg','395 kg','385 kg'],answer:2,why:'680 − 295 = 385 kg gạo.'},
{type:'fill',prompt:'Tính: 813 − 457 = ___',answerText:'356',why:'13 − 7 = 6 (mượn); 10 − 5 = 5 (mượn tiếp); 7 − 4 = 3. Được 356.'},
{type:'tf',prompt:'600 − 275 = 325.',options:['Đúng','Sai'],answer:0,why:'Đúng. 10 − 5 = 5 (mượn); 9 − 7 = 2 (mượn tiếp); 5 − 2 = 3. Được 325.'}
]},
{title:'Tuần 31 — Thu thập, phân loại, kiểm đếm số liệu — Biểu đồ tranh',questions:[
{prompt:'Lớp em kiểm đếm được 12 bạn thích đọc sách, 9 bạn thích đá bóng, 8 bạn thích vẽ. Môn nào được thích nhiều nhất?',options:['Đá bóng','Đọc sách','Vẽ'],answer:1,why:'12 lớn hơn 9 và 8 nên đọc sách được thích nhiều nhất.'},
{prompt:'Biểu đồ tranh cho biết: mỗi hình tròn là 1 quả táo. Một hàng có 7 hình tròn thì có bao nhiêu quả táo?',options:['6 quả','8 quả','7 quả'],answer:2,why:'Mỗi hình tròn ứng với 1 quả táo, 7 hình tròn là 7 quả táo.'},
{prompt:'Trong lớp có 15 bạn nữ và 13 bạn nam. Lớp có tất cả bao nhiêu bạn?',options:['28 bạn','27 bạn','29 bạn'],answer:0,why:'15 + 13 = 28 bạn.'},
{type:'fill',prompt:'Lớp đếm được 14 bạn thích bơi và 10 bạn thích hát. Số bạn thích bơi nhiều hơn số bạn thích hát là ___ bạn.',answerText:'4',why:'14 − 10 = 4 bạn.'},
{type:'tf',prompt:'Biểu đồ tranh dùng hình vẽ để biểu diễn số liệu.',options:['Đúng','Sai'],answer:0,why:'Đúng. Biểu đồ tranh thay số liệu bằng các hình vẽ.'}
]},
{title:'Tuần 32 — Chắc chắn, có thể, không thể — Ôn tập các số trong phạm vi 1000',questions:[
{prompt:'Ngày mai trời nắng là điều “chắc chắn” hay “có thể”?',options:['Chắc chắn','Không thể','Có thể'],answer:2,why:'Thời tiết ngày mai chưa biết trước nên chỉ là “có thể” nắng.'},
{prompt:'Số lớn nhất có ba chữ số là số nào?',options:['999','900','1000'],answer:0,why:'Số lớn nhất có ba chữ số là 999.'},
{prompt:'Số 805 đọc là gì?',options:['Tám trăm năm mươi','Tám trăm linh năm','Tám mươi lăm'],answer:1,why:'805 có 8 trăm, 0 chục, 5 đơn vị, đọc là tám trăm linh năm.'},
{type:'fill',prompt:'Số lớn nhất có ba chữ số là ___.',answerText:'999',why:'Số lớn nhất có ba chữ số là 999.'},
{type:'tf',prompt:'Ngày mai chắc chắn trời sẽ mưa.',options:['Đúng','Sai'],answer:1,why:'Sai. Thời tiết ngày mai chưa biết trước nên chỉ nói “có thể” mưa, không nói “chắc chắn”.'}
]},
{title:'Tuần 33 — Ôn tập phép cộng, phép trừ trong phạm vi 100 và 1000',questions:[
{prompt:'67 + 25 bằng bao nhiêu?',options:['92','82','102'],answer:0,why:'7+5=12 viết 2 nhớ 1; 6+2+1=9. Được 92.'},
{prompt:'438 + 257 bằng bao nhiêu?',options:['685','695','705'],answer:1,why:'8+7=15 viết 5 nhớ 1; 3+5+1=9; 4+2=6. Được 695.'},
{prompt:'824 − 379 bằng bao nhiêu?',options:['435','455','445'],answer:2,why:'14−9=5 (mượn); 11−7=4; 7−3=4. Được 445.'},
{type:'fill',prompt:'Tính: 324 + 475 = ___',answerText:'799',why:'4 + 5 = 9; 2 + 7 = 9; 3 + 4 = 7. Được 799.'},
{type:'tf',prompt:'512 − 268 = 244.',options:['Đúng','Sai'],answer:0,why:'Đúng. 12 − 8 = 4 (mượn); 10 − 6 = 4 (mượn tiếp); 4 − 2 = 2. Được 244.'}
]},
{title:'Tuần 34 — Ôn tập phép nhân, phép chia — Ôn tập hình học',questions:[
{prompt:'2 × 9 bằng bao nhiêu?',options:['16','18','20'],answer:1,why:'2 × 9 là 2 được lấy 9 lần, bằng 18.'},
{prompt:'30 : 5 bằng bao nhiêu?',options:['5','7','6'],answer:2,why:'Vì 5 × 6 = 30 nên 30 : 5 = 6.'},
{prompt:'Hình tam giác có bao nhiêu cạnh?',options:['3 cạnh','4 cạnh','5 cạnh'],answer:0,why:'Hình tam giác có 3 cạnh và 3 góc.'},
{type:'fill',prompt:'Tính: 5 × 7 = ___',answerText:'35',why:'Theo bảng nhân 5: 5 × 7 = 35.'},
{type:'tf',prompt:'18 : 2 = 8.',options:['Đúng','Sai'],answer:1,why:'Sai. Vì 9 × 2 = 18 nên 18 : 2 = 9.'}
]},
{title:'Tuần 35 — Ôn tập đo lường — Ôn tập kiểm đếm số liệu — Ôn tập chung cuối năm',questions:[
{prompt:'3 m bằng bao nhiêu xăng-ti-mét?',options:['30 cm','3000 cm','300 cm'],answer:2,why:'1 m = 100 cm nên 3 m = 300 cm.'},
{prompt:'Một tuần lễ em đếm được: thứ Hai mưa, thứ Ba mưa, các ngày còn lại nắng. Có bao nhiêu ngày mưa?',options:['2 ngày','3 ngày','5 ngày'],answer:0,why:'Chỉ thứ Hai và thứ Ba mưa, tức 2 ngày.'},
{prompt:'51 + 49 bằng bao nhiêu?',options:['90','100','110'],answer:1,why:'1+9=10 viết 0 nhớ 1; 5+4+1=10. Được 100.'},
{type:'fill',prompt:'Điền số thích hợp: 2 m = ___ cm.',answerText:'200',why:'1 m = 100 cm nên 2 m = 200 cm.'},
{type:'tf',prompt:'1 km = 100 m.',options:['Đúng','Sai'],answer:1,why:'Sai. 1 km = 1 000 m.'}
]},
]},
{name:'📖 Tiếng Việt',desc:'Theo SGK Tiếng Việt 2 Kết nối tri thức, chia theo tuần.',units:[
{title:'Tuần 1 — Tôi là học sinh lớp 2 — Ngày hôm qua đâu rồi?',questions:[
{prompt:'Điền dấu câu: “Bạn tên là gì___”',options:['.','?','!'],answer:1,why:'Câu hỏi thường kết thúc bằng dấu hỏi.'},
{prompt:'Câu nào dùng để giới thiệu về mình?',options:['Em tên là gì?','Hoa ơi, vào lớp đi!','Em tên là Hoa, học lớp 2.'],answer:2,why:'Câu “Em tên là Hoa, học lớp 2.” là câu giới thiệu về bản thân.'},
{type:'fill',prompt:'Điền dấu câu thích hợp vào cuối câu: Hôm nay em đi học sớm___',answerText:'.',why:'Câu kể lại sự việc kết thúc bằng dấu chấm.',accept:['.']},
{type:'tf',prompt:'Khi viết tên riêng của bạn, em không cần viết hoa chữ cái đầu.',options:['Đúng','Sai'],answer:1,why:'Sai. Tên riêng của người phải viết hoa chữ cái đầu.'}
]},
{title:'Tuần 2 — Niềm vui của Bi và Bống — Làm việc thật là vui',questions:[
{prompt:'Từ nào chỉ hoạt động?',options:['xanh','chạy','bông hoa'],answer:1,why:'“Chạy” là từ chỉ hoạt động.'},
{prompt:'Từ nào dưới đây chỉ sự vật trong nhà?',options:['cái chổi','quét nhà','sạch sẽ'],answer:0,why:'“Cái chổi” là từ chỉ sự vật — một đồ vật dùng để quét nhà.'},
{type:'fill',prompt:'Điền từ chỉ hoạt động: Sáng nay, em ___ răng rồi đi học.',answerText:'đánh',why:'“Đánh răng” là hoạt động em làm mỗi sáng.',accept:['đánh']},
{type:'tf',prompt:'Từ “xinh đẹp” là từ chỉ hoạt động.',options:['Đúng','Sai'],answer:1,why:'Sai. “Xinh đẹp” là từ chỉ đặc điểm; từ chỉ hoạt động là những từ như chạy, nhảy, hát.'}
]},
{title:'Tuần 3 — Em có xinh không? — Một giờ học',questions:[
{prompt:'Từ nào chỉ đặc điểm?',options:['bông hoa','xinh xắn','cười'],answer:1,why:'“Xinh xắn” nêu đặc điểm, vẻ ngoài của người hoặc vật.'},
{prompt:'Chọn từ thích hợp: “Bạn Hoa học rất ___.”',options:['cái bàn','chạy','giỏi'],answer:2,why:'Cần từ chỉ đặc điểm/kết quả học tập: bạn Hoa học rất giỏi.'},
{type:'fill',prompt:'Điền từ chỉ đặc điểm: Bông hoa hồng ___ ngát.',answerText:'thơm',why:'“Thơm” nêu đặc điểm mùi hương của bông hoa.',accept:['thơm']},
{type:'tf',prompt:'Từ “chạy nhảy” là từ chỉ đặc điểm.',options:['Đúng','Sai'],answer:1,why:'Sai. “Chạy nhảy” là từ chỉ hoạt động, không phải từ chỉ đặc điểm.'}
]},
{title:'Tuần 4 — Cây xấu hổ — Cầu thủ dự bị',questions:[
{prompt:'“Cây xấu hổ khép lá lại khi có người chạm vào.” Cây xấu hổ làm gì khi bị chạm vào?',options:['Nở hoa','Rụng hết lá','Khép lá lại'],answer:2,why:'Câu văn nói rõ: cây xấu hổ khép lá lại khi có người chạm vào.'},
{prompt:'Chọn cách viết đúng của từ chỉ quả trên cây:',options:['trái cây','chái cây','trái câyy'],answer:0,why:'Viết đúng là “trái cây” với dấu sắc ở chữ “trái”.'},
{type:'fill',prompt:'Điền từ còn thiếu: Khi có người chạm vào, cây xấu hổ ___ lá lại.',answerText:'khép',why:'Cây xấu hổ khép lá lại khi có người chạm vào.',accept:['khép']},
{type:'tf',prompt:'Cầu thủ dự bị được vào sân ngay từ đầu trận đấu.',options:['Đúng','Sai'],answer:1,why:'Sai. Cầu thủ dự bị ngồi ngoài sân và chỉ vào sân khi được thay người.'}
]},
{title:'Tuần 5 — Cô giáo lớp em — Thời khóa biểu',questions:[
{prompt:'Từ nào gần nghĩa với “chăm chỉ”?',options:['siêng năng','lười biếng','ồn ào'],answer:0,why:'“Chăm chỉ” và “siêng năng” có nghĩa gần giống nhau.'},
{prompt:'Mỗi ngày, em xem gì để biết hôm nay học những môn nào?',options:['Thời khóa biểu','Thực đơn','Bảng điểm danh'],answer:0,why:'Thời khóa biểu cho biết các môn học trong ngày và trong tuần.'},
{type:'fill',prompt:'Điền từ gần nghĩa với “chăm chỉ”: Bạn Lan rất ___, luôn hoàn thành bài tập đầy đủ.',answerText:'siêng năng',why:'“Chăm chỉ” và “siêng năng” có nghĩa gần giống nhau.',accept:['siêng năng','chăm chỉ']},
{type:'tf',prompt:'“Lười biếng” là từ gần nghĩa với “chăm chỉ”.',options:['Đúng','Sai'],answer:1,why:'Sai. “Lười biếng” trái nghĩa với “chăm chỉ”; từ gần nghĩa với “chăm chỉ” là “siêng năng”.'}
]},
{title:'Tuần 6 — Cái trống trường em — Danh sách học sinh',questions:[
{prompt:'Khi viết họ và tên của mình, chữ cái đầu tiên phải viết thế nào?',options:['Viết thường','Viết hoa','Viết cách xa'],answer:1,why:'Tên riêng của người phải viết hoa chữ cái đầu.'},
{prompt:'Chọn từ viết đúng — nơi em học tập mỗi ngày:',options:['xân trường','sân trườn','sân trường'],answer:2,why:'Viết đúng là “sân trường” — vần “ân” và “ương”.'},
{type:'fill',prompt:'Điền chữ cái viết hoa còn thiếu: Bạn ___gọc là lớp trưởng của lớp em.',answerText:'N',why:'Tên riêng “Ngọc” phải viết hoa chữ cái đầu là N.',accept:['N']},
{type:'tf',prompt:'Khi viết họ và tên của mình, chữ cái đầu của mỗi tiếng đều viết hoa.',options:['Đúng','Sai'],answer:0,why:'Đúng. Họ và tên người phải viết hoa chữ cái đầu của mỗi tiếng.'}
]},
{title:'Tuần 7 — Yêu lắm trường ơi! — Em học vẽ',questions:[
{prompt:'Câu nào tả ngôi trường của em?',options:['Em đi học.','Hôm nay là thứ Hai.','Trường em có sân rộng và nhiều cây xanh.'],answer:2,why:'Câu có từ ngữ tả đặc điểm (sân rộng, nhiều cây xanh) là câu tả trường.'},
{prompt:'Trong câu “Em vẽ một bông hoa.”, từ nào chỉ hoạt động?',options:['vẽ','bông hoa','đẹp'],answer:0,why:'“Vẽ” là từ chỉ hoạt động trong câu.'},
{type:'fill',prompt:'Điền từ tả đặc điểm: Sân trường em rộng và ___.',answerText:'sạch đẹp',why:'Có thể điền từ tả đặc điểm như “sạch đẹp”, “thoáng mát”.',accept:['sạch đẹp','sạch','đẹp','thoáng mát']},
{type:'tf',prompt:'Câu “Em đến trường.” là câu tả ngôi trường.',options:['Đúng','Sai'],answer:1,why:'Sai. Câu này chỉ kể việc em đến trường, không có từ ngữ tả đặc điểm của ngôi trường.'}
]},
{title:'Tuần 8 — Cuốn sách của em — Khi trang sách mở ra',questions:[
{prompt:'Đọc sách mang lại cho em điều gì?',options:['Biết thêm nhiều điều hay','Mỏi tay hơn','Rách sách nhanh hơn'],answer:0,why:'Đọc sách giúp em biết thêm nhiều điều hay và bổ ích.'},
{prompt:'Khi mượn sách của bạn, em cần làm gì?',options:['Gấp góc sách làm dấu','Giữ sách sạch, không vẽ bậy lên sách','Xé trang mình thích'],answer:1,why:'Em cần giữ gìn sách của bạn, đọc xong trả lại nguyên vẹn.'},
{type:'fill',prompt:'Điền từ còn thiếu: Em giữ gìn sách cẩn thận, không ___ trang sách.',answerText:'xé',why:'Giữ gìn sách là không xé, không làm rách trang sách.',accept:['xé']},
{type:'tf',prompt:'Đọc sách giúp em biết thêm nhiều điều hay.',options:['Đúng','Sai'],answer:0,why:'Đúng. Sách mang lại cho em nhiều kiến thức và điều hay mới.'}
]},
{title:'Tuần 9 — Ôn tập giữa học kì 1',questions:[
{prompt:'Câu nào là câu kể?',options:['Hôm nay em có đi học sớm không?','Hôm nay em đi học sớm.','Ôi, trường đẹp quá!'],answer:1,why:'Câu kể dùng để kể lại sự việc và kết thúc bằng dấu chấm.'},
{prompt:'Chọn từ viết đúng — đồ dùng để ghi bài:',options:['quyển vỡ','cuển vở','quyển vở'],answer:2,why:'Viết đúng là “quyển vở”.'},
{type:'fill',prompt:'Điền dấu câu thích hợp vào cuối câu: Bạn có thích đọc sách không___',answerText:'?',why:'Câu dùng để hỏi kết thúc bằng dấu hỏi (dấu chấm hỏi).',accept:['?']},
{type:'tf',prompt:'Câu kể kết thúc bằng dấu chấm.',options:['Đúng','Sai'],answer:0,why:'Đúng. Câu kể dùng để kể lại sự việc và kết thúc bằng dấu chấm.'}
]},
{title:'Tuần 10 — Gọi bạn — Tớ nhớ cậu',questions:[
{prompt:'Khi bạn buồn, em nên nói câu nào?',options:['Kệ bạn đi!','Sao bạn khóc hoài vậy?','Đừng buồn, có tớ ở đây!'],answer:2,why:'Câu nói an ủi, động viên cho thấy em quan tâm đến bạn.'},
{prompt:'Từ nào gần nghĩa với “vui”?',options:['phấn khởi','buồn bã','tức giận'],answer:0,why:'“Phấn khởi” và “vui” có nghĩa gần giống nhau.'},
{type:'fill',prompt:'Điền từ còn thiếu: Bạn đừng ___ nữa, có tớ ở đây!',answerText:'buồn',why:'Câu an ủi bạn: “Bạn đừng buồn nữa, có tớ ở đây!”',accept:['buồn','khóc']},
{type:'tf',prompt:'Khi bạn buồn, em nên bỏ đi chơi chỗ khác.',options:['Đúng','Sai'],answer:1,why:'Sai. Khi bạn buồn, em nên ở bên an ủi, động viên bạn.'}
]},
{title:'Tuần 11 — Chữ A và những người bạn — Nhím nâu kết bạn',questions:[
{prompt:'Chữ cái nào đứng đầu bảng chữ cái tiếng Việt?',options:['Chữ A','Chữ B','Chữ Ă'],answer:0,why:'Bảng chữ cái tiếng Việt bắt đầu bằng chữ A.'},
{prompt:'Muốn kết bạn mới, em có thể nói câu nào?',options:['Tránh ra cho tớ đi!','Chào bạn, mình làm quen nhé!','Bạn đừng chơi với tớ.'],answer:1,why:'Lời chào thân thiện giúp em làm quen và kết bạn mới.'},
{type:'fill',prompt:'Chữ cái đứng ngay sau chữ A trong bảng chữ cái tiếng Việt là chữ ___.',answerText:'Ă',why:'Bảng chữ cái tiếng Việt: A, Ă, Â, B, C…',accept:['Ă','ă']},
{type:'tf',prompt:'Bảng chữ cái tiếng Việt bắt đầu bằng chữ B.',options:['Đúng','Sai'],answer:1,why:'Sai. Bảng chữ cái tiếng Việt bắt đầu bằng chữ A.'}
]},
{title:'Tuần 12 — Thả diều — Tớ là lê-gô',questions:[
{prompt:'Từ nào chỉ đồ chơi?',options:['gió','diều','bầu trời'],answer:1,why:'“Diều” là một đồ chơi — từ chỉ sự vật.'},
{prompt:'Câu nào đúng chính tả?',options:['Em thã diều ngoài đồng.','Em thả diều ngoài đòng.','Em thả diều ngoài đồng.'],answer:2,why:'Câu đúng: “thả” viết dấu hỏi, “đồng” viết với chữ đ và vần ông.'},
{type:'fill',prompt:'Điền từ chỉ đồ chơi: Chiều mát, em ra đồng thả ___.',answerText:'diều',why:'“Diều” là đồ chơi em thả lên trời khi có gió.',accept:['diều','con diều']},
{type:'tf',prompt:'Từ “diều” là từ chỉ đồ chơi.',options:['Đúng','Sai'],answer:0,why:'Đúng. Diều là một đồ chơi quen thuộc của trẻ em.'}
]},
{title:'Tuần 13 — Rồng rắn lên mây — Nặn đồ chơi',questions:[
{prompt:'“Rồng rắn lên mây” là trò chơi gì của trẻ em Việt Nam?',options:['Trò chơi điện tử','Trò chơi trên máy tính','Trò chơi dân gian'],answer:2,why:'Rồng rắn lên mây là trò chơi dân gian quen thuộc của trẻ em.'},
{prompt:'Trong câu “Em nặn một con thỏ bằng đất sét.”, từ nào chỉ hoạt động?',options:['nặn','đất sét','mềm'],answer:0,why:'“Nặn” là hoạt động dùng tay tạo hình.'},
{type:'fill',prompt:'Điền từ còn thiếu: Trò chơi ___ rắn lên mây là trò chơi dân gian của trẻ em Việt Nam.',answerText:'rồng',why:'Tên trò chơi là “rồng rắn lên mây”.',accept:['rồng','Rồng']},
{type:'tf',prompt:'Trò chơi “rồng rắn lên mây” là trò chơi điện tử.',options:['Đúng','Sai'],answer:1,why:'Sai. “Rồng rắn lên mây” là trò chơi dân gian, trẻ em chơi cùng nhau ở sân.'}
]},
{title:'Tuần 14 — Sự tích hoa tỉ muội — Em mang về yêu thương',questions:[
{prompt:'Trong gia đình, anh chị em cần đối với nhau thế nào?',options:['Yêu thương, nhường nhịn nhau','Tranh giành đồ chơi','Không nói chuyện với nhau'],answer:0,why:'Anh chị em trong nhà cần yêu thương và nhường nhịn nhau.'},
{prompt:'Từ nào chỉ đặc điểm tính nết của người?',options:['người chị','hiền lành','ôm'],answer:1,why:'“Hiền lành” nêu đặc điểm, tính nết của con người.'},
{type:'fill',prompt:'Điền từ còn thiếu: Anh chị em trong nhà phải ___ thương nhau.',answerText:'yêu',why:'Anh chị em trong nhà phải yêu thương, nhường nhịn nhau.',accept:['yêu']},
{type:'tf',prompt:'Anh chị em nên tranh giành đồ chơi với nhau.',options:['Đúng','Sai'],answer:1,why:'Sai. Anh chị em cần yêu thương và nhường nhịn nhau, không tranh giành.'}
]},
{title:'Tuần 15 — Mẹ — Trò chơi của bố',questions:[
{prompt:'Câu nào thể hiện tình cảm với mẹ?',options:['Mẹ nấu cơm chưa?','Con yêu mẹ nhiều lắm!','Con đi chơi đây.'],answer:1,why:'Câu “Con yêu mẹ nhiều lắm!” bày tỏ tình cảm yêu thương với mẹ.'},
{prompt:'Chọn từ viết đúng — cảm giác khi được mẹ ôm vào lòng:',options:['ấm áp p','ấm ápp','ấm áp'],answer:2,why:'Viết đúng là “ấm áp” — cả hai tiếng đều có dấu sắc.'},
{type:'fill',prompt:'Điền từ còn thiếu: Con ___ mẹ nhiều lắm!',answerText:'yêu',why:'Câu nói bày tỏ tình cảm: “Con yêu mẹ nhiều lắm!”',accept:['yêu']},
{type:'tf',prompt:'Câu “Con yêu mẹ nhiều lắm!” bày tỏ tình cảm yêu thương với mẹ.',options:['Đúng','Sai'],answer:0,why:'Đúng. Câu nói thể hiện rõ tình yêu thương của con với mẹ.'}
]},
{title:'Tuần 16 — Cánh cửa nhớ bà — Thương ông',questions:[
{prompt:'Khi ông bà đau chân, em có thể làm gì giúp ông bà?',options:['Chạy đi chơi ngay','Nói thật to cho vui','Lấy ghế mời ông bà ngồi nghỉ'],answer:2,why:'Lấy ghế mời ông bà ngồi là việc làm quan tâm, giúp đỡ ông bà.'},
{prompt:'Điền dấu câu: “Ông ơi, ông có mệt không___”',options:['?','.','!'],answer:0,why:'Đây là câu hỏi nên kết thúc bằng dấu hỏi.'},
{type:'fill',prompt:'Điền từ còn thiếu: Khi ông bà mệt, em lấy ghế mời ông bà ___ nghỉ.',answerText:'ngồi',why:'Em lấy ghế mời ông bà ngồi nghỉ cho đỡ mệt.',accept:['ngồi']},
{type:'tf',prompt:'Em nên chạy nhảy, la hét khi ông bà đang nghỉ ngơi.',options:['Đúng','Sai'],answer:1,why:'Sai. Khi ông bà nghỉ ngơi, em cần giữ yên lặng để ông bà được nghỉ.'}
]},
{title:'Tuần 17 — Ánh sáng của yêu thương — Chơi chong chóng',questions:[
{prompt:'Việc làm nào thể hiện yêu thương gia đình?',options:['Quây quần bên mâm cơm cùng ông bà, bố mẹ','Xem điện thoại suốt bữa ăn','Cãi nhau với em'],answer:0,why:'Sum họp, quây quần bên gia đình là biểu hiện của yêu thương.'},
{prompt:'Từ nào gần nghĩa với “yêu thương”?',options:['ghét bỏ','trìu mến','lạnh lùng'],answer:1,why:'“Trìu mến” và “yêu thương” có nghĩa gần giống nhau.'},
{type:'fill',prompt:'Điền từ còn thiếu: Buổi tối, cả nhà em quây ___ bên mâm cơm.',answerText:'quần',why:'“Quây quần” là sum họp, ở bên nhau đầm ấm.',accept:['quần']},
{type:'tf',prompt:'Quây quần bên gia đình là việc làm thể hiện yêu thương.',options:['Đúng','Sai'],answer:0,why:'Đúng. Sum họp, quây quần bên người thân là biểu hiện của yêu thương gia đình.'}
]},
{title:'Tuần 18 — Ôn tập và đánh giá cuối học kì 1',questions:[
{prompt:'Câu nào viết đúng dấu câu?',options:['Em yêu trường em','Em yêu trường em.','em yêu trường em.'],answer:1,why:'Câu kể bắt đầu viết hoa và kết thúc bằng dấu chấm.'},
{prompt:'Chọn từ viết đúng — từ khen một em bé ngoan:',options:['ngoan ngoản','ngoan ngoẵnn','ngoan ngoãn'],answer:2,why:'Viết đúng là “ngoan ngoãn” với dấu ngã.'},
{type:'fill',prompt:'Điền chữ cái viết hoa còn thiếu: ___m yêu trường em.',answerText:'E',why:'Đầu câu phải viết hoa: “Em yêu trường em.”',accept:['E']},
{type:'tf',prompt:'Đầu câu không cần viết hoa.',options:['Đúng','Sai'],answer:1,why:'Sai. Đầu câu luôn phải viết hoa chữ cái đầu tiên.'}
]},
{title:'Tuần 19 — Chuyện bốn mùa — Mùa nước nổi',questions:[
{prompt:'Một năm có mấy mùa?',options:['2 mùa','12 mùa','4 mùa'],answer:2,why:'Một năm có 4 mùa: xuân, hạ, thu, đông.'},
{prompt:'Từ nào chỉ thời tiết mùa hè?',options:['nắng nóng','se lạnh','mưa phùn'],answer:0,why:'Mùa hè thường nắng nóng.'},
{type:'fill',prompt:'Điền mùa còn thiếu: Một năm có bốn mùa: xuân, hạ, ___, đông.',answerText:'thu',why:'Bốn mùa trong năm là xuân, hạ, thu, đông.',accept:['thu']},
{type:'tf',prompt:'Một năm có 12 mùa.',options:['Đúng','Sai'],answer:1,why:'Sai. Một năm có 4 mùa: xuân, hạ, thu, đông (12 là số tháng trong năm).'}
]},
{title:'Tuần 20 — Họa mi hót — Tết đến rồi',questions:[
{prompt:'Từ nào viết đúng?',options:['nghỉ ngơi','ngỉ ngơi','nghĩ ngơi'],answer:0,why:'Viết đúng là “nghỉ ngơi”.'},
{prompt:'Đọc đoạn: “Sáng mùng một Tết, em mặc áo mới, chúc Tết ông bà.” Em làm gì vào sáng mùng một Tết?',options:['Mặc áo mới và chúc Tết ông bà','Đi học như thường','Ra đồng gặt lúa'],answer:0,why:'Đoạn văn nói em mặc áo mới, chúc Tết ông bà vào sáng mùng một.'},
{type:'fill',prompt:'Điền chữ còn thiếu cho đúng chính tả: Sau giờ học, em về nhà ___ ngơi một lúc.',answerText:'nghỉ',why:'Viết đúng chính tả là “nghỉ ngơi” với dấu hỏi.',accept:['nghỉ']},
{type:'tf',prompt:'Từ “nghỉ ngơi” viết như vậy là đúng chính tả.',options:['Đúng','Sai'],answer:0,why:'Đúng. “Nghỉ ngơi” viết với “ngh” và dấu hỏi ở tiếng “nghỉ”.'}
]},
{title:'Tuần 21 — Giọt nước và biển lớn — Mùa vàng',questions:[
{prompt:'Giọt nước nhỏ chảy mãi sẽ góp thành gì lớn?',options:['Cái cốc','Biển lớn','Vũng nước nhỏ'],answer:1,why:'Nhiều giọt nước góp lại thành sông, biển lớn — như bài học về sự kiên trì.'},
{prompt:'Từ nào chỉ sự vật trong thiên nhiên?',options:['chảy','mênh mông','dòng sông'],answer:2,why:'“Dòng sông” là từ chỉ sự vật trong thiên nhiên.'},
{type:'fill',prompt:'Điền từ còn thiếu: Nhiều giọt nước góp lại thành ___ lớn.',answerText:'biển',why:'Nhiều giọt nước góp lại thành sông, thành biển lớn.',accept:['biển']},
{type:'tf',prompt:'Một giọt nước nhỏ thì không bao giờ góp được thành biển lớn.',options:['Đúng','Sai'],answer:1,why:'Sai. Rất nhiều giọt nước nhỏ góp lại sẽ thành biển lớn, như bài học về sự kiên trì.'}
]},
{title:'Tuần 22 — Hạt thóc — Lũy tre',questions:[
{prompt:'Người nông dân gặt lúa khi nào?',options:['Khi lúa mới gieo','Khi trời tối','Khi lúa chín vàng'],answer:2,why:'Lúa chín vàng là lúc nông dân thu hoạch, gặt lúa.'},
{prompt:'Chọn từ viết đúng — hàng tre xanh ở làng quê:',options:['lũy tre','lủy tre','lũy che'],answer:0,why:'Viết đúng là “lũy tre” — “lũy” dấu ngã, “tre” bắt đầu bằng tr.'},
{type:'fill',prompt:'Điền từ còn thiếu: Người nông dân gặt lúa khi lúa chín ___.',answerText:'vàng',why:'Lúa chín vàng là lúc nông dân thu hoạch.',accept:['vàng']},
{type:'tf',prompt:'Lũy tre là hình ảnh quen thuộc của làng quê Việt Nam.',options:['Đúng','Sai'],answer:0,why:'Đúng. Lũy tre xanh thường mọc quanh làng quê Việt Nam.'}
]},
{title:'Tuần 23 — Vè chim — Khủng long',questions:[
{prompt:'Con vật nào biết bắt chước tiếng người nói?',options:['Con vẹt','Con gà','Con vịt'],answer:0,why:'Chim vẹt có thể bắt chước tiếng người nói.'},
{prompt:'Khủng long là loài vật sống ở đâu trong truyện và sách khoa học cho trẻ em?',options:['Dưới đáy biển ngày nay','Trên Trái Đất từ rất lâu về trước','Trên Mặt Trăng'],answer:1,why:'Khủng long đã sống trên Trái Đất từ rất lâu về trước và nay không còn nữa.'},
{type:'fill',prompt:'Điền từ còn thiếu: Con ___ biết bắt chước tiếng người nói.',answerText:'vẹt',why:'Chim vẹt có thể bắt chước tiếng người nói.',accept:['vẹt','chim vẹt']},
{type:'tf',prompt:'Khủng long là con vật em có thể gặp ở vườn thú ngày nay.',options:['Đúng','Sai'],answer:1,why:'Sai. Khủng long sống cách đây rất lâu và ngày nay không còn nữa.'}
]},
{title:'Tuần 24 — Sự tích cây thì là — Bờ tre đón khách',questions:[
{prompt:'“Lan tưới cây mỗi sáng. Cây trong vườn xanh tốt.” Ai tưới cây?',options:['Lan','Bạn Nam','Cô giáo'],answer:0,why:'Câu đầu cho biết Lan tưới cây mỗi sáng.'},
{prompt:'Trong câu trên, cây xanh tốt nhờ điều gì?',options:['Được tưới chăm sóc','Trời tối','Có nhiều đồ chơi'],answer:0,why:'Lan tưới cây đều đặn nên cây được chăm sóc.'},
{type:'fill',prompt:'Điền từ còn thiếu: Mỗi sáng, Lan ___ cây trong vườn.',answerText:'tưới',why:'Lan tưới cây mỗi sáng để cây xanh tốt.',accept:['tưới']},
{type:'tf',prompt:'Đọc kĩ bài văn sẽ giúp em trả lời đúng các câu hỏi về bài.',options:['Đúng','Sai'],answer:0,why:'Đúng. Đọc kĩ và nhớ chi tiết trong bài giúp em trả lời đúng câu hỏi.'}
]},
{title:'Tuần 25 — Tiếng chổi tre — Cỏ non cười rồi',questions:[
{prompt:'Bác lao công quét sân trường vào lúc nào để sân sạch đẹp?',options:['Lúc nửa đêm','Khi học sinh đang thi','Từ sớm tinh mơ'],answer:2,why:'Các bác lao công thường quét dọn từ rất sớm, trước giờ học.'},
{prompt:'Trong câu “Bác lao công quét sân từ sớm.”, từ nào chỉ hoạt động?',options:['quét','bác lao công','sớm'],answer:0,why:'“Quét” là từ chỉ hoạt động trong câu.'},
{type:'fill',prompt:'Điền từ còn thiếu: Bác lao công quét sân trường từ sớm tinh ___.',answerText:'mơ',why:'“Sớm tinh mơ” là lúc trời vừa sáng, rất sớm.',accept:['mơ']},
{type:'tf',prompt:'Bác lao công quét dọn giúp sân trường sạch đẹp.',options:['Đúng','Sai'],answer:0,why:'Đúng. Nhờ bác lao công quét dọn từ sớm mà sân trường luôn sạch đẹp.'}
]},
{title:'Tuần 26 — Những con sao biển — Tạm biệt cánh cam',questions:[
{prompt:'Con gì sống ở biển, có nhiều cánh tay mềm?',options:['Con bạch tuộc','Con sao biển có 5 cánh','Con ngựa'],answer:0,why:'Sao biển thường có 5 cánh; bạch tuộc sống ở biển và có 8 xúc tu mềm.'},
{prompt:'Con cam (cánh cam) khi trưởng thành thường bay đến đâu vào buổi tối?',options:['Xuống đáy sông','Nơi có ánh đèn sáng','Vào tổ dưới đất'],answer:1,why:'Nhiều loài côn trùng như cánh cam thường bay về phía ánh sáng đèn vào buổi tối.'},
{type:'fill',prompt:'Điền số còn thiếu: Sao biển thường có ___ cánh.',answerText:'5',why:'Sao biển thường có 5 cánh.',accept:['5','năm']},
{type:'tf',prompt:'Sao biển sống ở trên cây.',options:['Đúng','Sai'],answer:1,why:'Sai. Sao biển sống ở biển, dưới nước.'}
]},
{title:'Tuần 27 — Ôn tập giữa học kì 2',questions:[
{prompt:'Câu nào là câu hỏi?',options:['Hôm nay bạn mang sách.','Hôm nay bạn có mang sách không?','Ôi, sách hay quá!'],answer:1,why:'Câu kết thúc bằng dấu hỏi và dùng để hỏi là câu hỏi.'},
{prompt:'Chọn từ viết đúng — ý nói phải bảo vệ, không làm hư hỏng:',options:['giữ gình','dữ gìn','giữ gìn'],answer:2,why:'Viết đúng là “giữ gìn”.'},
{type:'fill',prompt:'Điền dấu câu thích hợp vào cuối câu: Hôm nay là thứ mấy___',answerText:'?',why:'Câu dùng để hỏi kết thúc bằng dấu hỏi (dấu chấm hỏi).',accept:['?']},
{type:'tf',prompt:'Câu hỏi kết thúc bằng dấu chấm.',options:['Đúng','Sai'],answer:1,why:'Sai. Câu hỏi kết thúc bằng dấu hỏi (dấu chấm hỏi), không phải dấu chấm.'}
]},
{title:'Tuần 28 — Những cách chào độc đáo — Thư viện biết đi',questions:[
{prompt:'Khi gặp người lớn, em chào thế nào cho lịch sự?',options:['Im lặng đi qua','La thật to','Khoanh tay và nói: “Con chào cô ạ!”'],answer:2,why:'Khoanh tay, chào rõ ràng là cách chào lịch sự của học sinh.'},
{prompt:'Thư viện là nơi dùng để làm gì?',options:['Đọc và mượn sách','Cất xe đạp','Nấu ăn'],answer:0,why:'Thư viện là nơi mọi người đến đọc và mượn sách.'},
{type:'fill',prompt:'Điền từ còn thiếu: Khi gặp thầy cô, em khoanh tay và nói: “Con ___ cô ạ!”',answerText:'chào',why:'Lời chào lịch sự: “Con chào cô ạ!”',accept:['chào']},
{type:'tf',prompt:'Khi gặp người lớn, em nên im lặng đi qua.',options:['Đúng','Sai'],answer:1,why:'Sai. Khi gặp người lớn, em cần chào hỏi lễ phép.'}
]},
{title:'Tuần 29 — Cảm ơn anh hà mã — Từ chú bồ câu đến in-tơ-nét',questions:[
{prompt:'Khi được bạn giúp đỡ, em nên nói gì?',options:['Cảm ơn bạn nhé!','Không cần cảm ơn','Giúp nữa đi!'],answer:0,why:'Nói “Cảm ơn bạn nhé!” thể hiện em biết ơn và lịch sự.'},
{prompt:'Ngày xưa chưa có in-tơ-nét, người ta gửi tin cho nhau bằng cách nào?',options:['Nhắn tin điện thoại','Viết thư, gửi bồ câu đưa thư','Gọi video'],answer:1,why:'Xưa kia người ta viết thư tay và có cả bồ câu đưa thư.'},
{type:'fill',prompt:'Điền từ còn thiếu: Khi được bạn giúp đỡ, em nói: “___ ơn bạn nhé!”',answerText:'Cảm',why:'Lời cảm ơn: “Cảm ơn bạn nhé!”',accept:['Cảm','cảm']},
{type:'tf',prompt:'Nói lời cảm ơn khi được giúp đỡ là lịch sự.',options:['Đúng','Sai'],answer:0,why:'Đúng. Biết nói “cảm ơn” khi được giúp đỡ thể hiện em lịch sự và biết ơn.'}
]},
{title:'Tuần 30 — Mai An Tiêm — Thư gửi bố ngoài đảo',questions:[
{prompt:'Mai An Tiêm trong truyện đã trồng được cây gì trên đảo?',options:['Cây cam','Cây dưa hấu','Cây lúa'],answer:1,why:'Theo truyện, Mai An Tiêm trồng dưa hấu trên đảo hoang.'},
{prompt:'Khi viết thư, cuối thư em viết phần nào?',options:['Tên người nhận ở cuối','Dấu chấm hỏi','Lời chào và chữ kí của người viết'],answer:2,why:'Cuối thư thường có lời chào tạm biệt và chữ kí/tên người viết.'},
{type:'fill',prompt:'Điền từ còn thiếu: Mai An Tiêm đã trồng cây ___ trên đảo.',answerText:'dưa hấu',why:'Theo truyện, Mai An Tiêm trồng dưa hấu trên đảo hoang.',accept:['dưa hấu']},
{type:'tf',prompt:'Mai An Tiêm trồng cây cam trên đảo hoang.',options:['Đúng','Sai'],answer:1,why:'Sai. Theo truyện, Mai An Tiêm trồng cây dưa hấu trên đảo.'}
]},
{title:'Tuần 31 — Bóp nát quả cam — Chiếc rễ đa tròn',questions:[
{prompt:'Trần Quốc Toản trong truyện “Bóp nát quả cam” nổi tiếng với tinh thần gì?',options:['Thích ăn cam','Sợ ra trận','Yêu nước, căm thù giặc'],answer:2,why:'Trần Quốc Toản nổi tiếng vì lòng yêu nước, muốn ra trận đánh giặc.'},
{prompt:'Từ nào chỉ đặc điểm hình dáng?',options:['tròn xoe','cái rễ','leo'],answer:0,why:'“Tròn xoe” nêu đặc điểm hình dáng của vật.'},
{type:'fill',prompt:'Điền từ còn thiếu: Trần Quốc Toản nổi tiếng với lòng ___ nước.',answerText:'yêu',why:'Trần Quốc Toản nổi tiếng với lòng yêu nước, căm thù giặc.',accept:['yêu']},
{type:'tf',prompt:'Trần Quốc Toản là người anh hùng nhỏ tuổi yêu nước.',options:['Đúng','Sai'],answer:0,why:'Đúng. Trần Quốc Toản còn nhỏ tuổi đã có lòng yêu nước, muốn ra trận đánh giặc.'}
]},
{title:'Tuần 32 — Đất nước chúng mình — Trên các miền đất nước',questions:[
{prompt:'Thủ đô của nước Việt Nam là thành phố nào?',options:['Hà Nội','Thành phố Hồ Chí Minh','Đà Nẵng'],answer:0,why:'Thủ đô của Việt Nam là Hà Nội.'},
{prompt:'Câu nào tả cảnh quê hương?',options:['Em làm bài tập.','Cánh đồng lúa chín vàng trải dài đến chân trời.','Hôm nay thứ mấy?'],answer:1,why:'Câu có hình ảnh cánh đồng lúa chín vàng là câu tả cảnh quê hương.'},
{type:'fill',prompt:'Điền tên còn thiếu: Thủ đô của nước Việt Nam là ___.',answerText:'Hà Nội',why:'Thủ đô của nước ta là thành phố Hà Nội.',accept:['Hà Nội']},
{type:'tf',prompt:'Thủ đô của Việt Nam là Thành phố Hồ Chí Minh.',options:['Đúng','Sai'],answer:1,why:'Sai. Thủ đô của Việt Nam là Hà Nội.'}
]},
{title:'Tuần 33 — Chuyện quả bầu — Khám phá đáy biển ở Trường Sa',questions:[
{prompt:'Theo truyện “Chuyện quả bầu”, các dân tộc anh em trên đất nước ta cùng sinh ra từ đâu?',options:['Từ nhiều quả khác nhau','Cùng một quả bầu','Từ trên trời rơi xuống'],answer:1,why:'Truyện kể các dân tộc anh em cùng ra đời từ một quả bầu thần kì.'},
{prompt:'Trường Sa là quần đảo thuộc nước nào?',options:['Trung Quốc','Nhật Bản','Việt Nam'],answer:2,why:'Quần đảo Trường Sa thuộc chủ quyền của Việt Nam.'},
{type:'fill',prompt:'Điền từ còn thiếu: Theo truyện “Chuyện quả bầu”, các dân tộc anh em cùng sinh ra từ một quả ___.',answerText:'bầu',why:'Truyện kể các dân tộc anh em cùng sinh ra từ một quả bầu.',accept:['bầu']},
{type:'tf',prompt:'Các dân tộc trên đất nước ta là anh em một nhà.',options:['Đúng','Sai'],answer:0,why:'Đúng. Theo truyện “Chuyện quả bầu”, các dân tộc cùng sinh ra từ một quả bầu nên là anh em một nhà.'}
]},
{title:'Tuần 34 — Hồ Gươm — Cánh đồng quê em',questions:[
{prompt:'Hồ Gươm nằm ở thành phố nào?',options:['Huế','Cần Thơ','Hà Nội'],answer:2,why:'Hồ Gươm (Hồ Hoàn Kiếm) nằm ở trung tâm Hà Nội.'},
{prompt:'Chọn từ viết đúng — nơi trồng lúa rộng mênh mông:',options:['cánh đồng','cánh đòng','cánh đồngg'],answer:0,why:'Viết đúng là “cánh đồng”.'},
{type:'fill',prompt:'Điền tên còn thiếu: Hồ Gươm nằm ở thủ đô ___.',answerText:'Hà Nội',why:'Hồ Gươm nằm ở trung tâm thủ đô Hà Nội.',accept:['Hà Nội']},
{type:'tf',prompt:'Hồ Gươm còn được gọi là Hồ Hoàn Kiếm.',options:['Đúng','Sai'],answer:0,why:'Đúng. Hồ Gươm còn có tên gọi khác là Hồ Hoàn Kiếm.'}
]},
{title:'Tuần 35 — Ôn tập và đánh giá cuối học kì 2',questions:[
{prompt:'Câu nào dùng đúng dấu phẩy?',options:['Buổi sáng, em tập thể dục.','Buổi, sáng em tập thể dục.','Buổi sáng em, tập thể dục.'],answer:0,why:'Dấu phẩy ngăn cách bộ phận chỉ thời gian “Buổi sáng” với phần còn lại của câu.'},
{prompt:'Trong câu “Em học bài rồi đi ngủ.”, từ nào chỉ hoạt động?',options:['bài học','học bài','giỏi'],answer:1,why:'“Học bài” là từ chỉ hoạt động của học sinh.'},
{type:'fill',prompt:'Điền dấu câu còn thiếu: Buổi sáng___ em tập thể dục.',answerText:',',why:'Dấu phẩy ngăn cách bộ phận chỉ thời gian “Buổi sáng” với phần còn lại của câu.',accept:[',']},
{type:'tf',prompt:'Dấu phẩy dùng để kết thúc câu.',options:['Đúng','Sai'],answer:1,why:'Sai. Dấu phẩy đặt ở giữa câu; dấu chấm mới dùng để kết thúc câu kể.'}
]},
]},
{name:'🌍 English',desc:'Global Success (bộ sách đi cùng Kết nối tri thức) — luyện theo tiến độ tuần.',units:[
{title:'Tuần 1 — Greetings — Lời chào: Hello!',questions:[
{prompt:'Khi gặp bạn, em có thể nói câu nào?',options:['Hello!','Good night!','Goodbye!'],answer:0,why:'Hello! là lời chào khi gặp nhau.'},
{prompt:'“Good morning!” nghĩa là gì?',options:['Chào buổi sáng!','Chào buổi tối!','Tạm biệt!'],answer:0,why:'Good morning dùng để chào vào buổi sáng.'},
{type:'fill',prompt:'Điền lời chào còn thiếu: “___! My name is Lan.”',answerText:'Hello',why:'“Hello!” là lời chào khi gặp nhau.',accept:['Hello','Hi']},
{type:'tf',prompt:'“Hello!” là lời chào dùng khi gặp nhau.',options:['Đúng','Sai'],answer:0,why:'Đúng. Hello! dùng để chào khi gặp nhau.'}
]},
{title:'Tuần 2 — Greetings — Hỏi thăm: How are you?',questions:[
{prompt:'“How are you?” hỏi điều gì?',options:['Bạn khỏe không?','Bạn tên gì?','Đây là gì?'],answer:0,why:'How are you? nghĩa là Bạn khỏe không?'},
{prompt:'Trả lời “How are you?” em nói:',options:['I am seven.','I am fine, thank you.','It is a pen.'],answer:1,why:'I am fine, thank you nghĩa là Em khỏe, cảm ơn.'},
{type:'fill',prompt:'Điền từ còn thiếu: “How are you? — I\'m ___, thank you.”',answerText:'fine',why:'Câu trả lời quen thuộc: “I\'m fine, thank you.” (Tôi khỏe, cảm ơn bạn.)',accept:['fine','good','OK','ok']},
{type:'tf',prompt:'“How are you?” dùng để hỏi tên của bạn.',options:['Đúng','Sai'],answer:1,why:'Sai. “How are you?” dùng để hỏi thăm sức khỏe; hỏi tên là “What\'s your name?”'}
]},
{title:'Tuần 3 — At school — Đồ dùng học tập: book, pen',questions:[
{prompt:'“Book” nghĩa là gì?',options:['quyển sách','cái bàn','quả bóng'],answer:0,why:'Book nghĩa là quyển sách.'},
{prompt:'“Pen” nghĩa là gì?',options:['quyển vở','cái thước','cây bút'],answer:2,why:'Pen nghĩa là cây bút.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: This is my ___. (quyển sách)',answerText:'book',why:'“Book” nghĩa là quyển sách.',accept:['book']},
{type:'tf',prompt:'“Pen” nghĩa là cái bút.',options:['Đúng','Sai'],answer:0,why:'Đúng. Pen là cái bút.'}
]},
{title:'Tuần 4 — In the classroom — Trong lớp học',questions:[
{prompt:'“Teacher” là ai?',options:['cô giáo / thầy giáo','bạn học','bác bảo vệ'],answer:0,why:'Teacher nghĩa là thầy giáo, cô giáo.'},
{prompt:'Em ngồi học ở đâu trong lớp? Chọn từ đúng: “desk”.',options:['cái ghế','cái bàn học','bảng đen'],answer:1,why:'Desk nghĩa là cái bàn học.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: My ___ is very nice. (thầy giáo / cô giáo)',answerText:'teacher',why:'“Teacher” nghĩa là thầy giáo, cô giáo.',accept:['teacher']},
{type:'tf',prompt:'“Teacher” nghĩa là bạn học.',options:['Đúng','Sai'],answer:1,why:'Sai. “Teacher” nghĩa là thầy giáo, cô giáo.'}
]},
{title:'Tuần 5 — Colours — Màu sắc: red, blue, yellow',questions:[
{prompt:'Chọn màu đỏ trong tiếng Anh.',options:['blue','red','green'],answer:1,why:'Red là màu đỏ.'},
{prompt:'“Yellow” là màu gì?',options:['màu xanh dương','màu vàng','màu tím'],answer:1,why:'Yellow nghĩa là màu vàng.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: The apple is ___. (màu đỏ)',answerText:'red',why:'“Red” là màu đỏ.',accept:['red']},
{type:'tf',prompt:'“Yellow” là màu xanh dương.',options:['Đúng','Sai'],answer:1,why:'Sai. “Yellow” là màu vàng; màu xanh dương là “blue”.'}
]},
{title:'Tuần 6 — Colours — Màu sắc quanh em: green, pink, orange',questions:[
{prompt:'“Green” là màu gì?',options:['màu hồng','màu cam','màu xanh lá'],answer:2,why:'Green nghĩa là màu xanh lá cây.'},
{prompt:'Quả cam trong tiếng Anh là “orange”. “Orange” còn là màu gì?',options:['màu cam','màu nâu','màu đen'],answer:0,why:'Orange vừa là quả cam, vừa là màu cam.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: The leaf is ___. (màu xanh lá)',answerText:'green',why:'“Green” là màu xanh lá cây.',accept:['green']},
{type:'tf',prompt:'“Pink” là màu hồng.',options:['Đúng','Sai'],answer:0,why:'Đúng. Pink nghĩa là màu hồng.'}
]},
{title:'Tuần 7 — Numbers — Số đếm 1 đến 5',questions:[
{prompt:'Số “three” là số mấy?',options:['3','2','5'],answer:0,why:'Three nghĩa là số 3.'},
{prompt:'Đếm: one, two, ___, four. Thiếu số nào?',options:['five','three','ten'],answer:1,why:'Thứ tự đếm: one (1), two (2), three (3), four (4).'},
{type:'fill',prompt:'Điền số tiếng Anh còn thiếu: one, two, ___, four, five.',answerText:'three',why:'Đếm theo thứ tự: one (1), two (2), three (3), four (4), five (5).',accept:['three']},
{type:'tf',prompt:'“Five” là số 4.',options:['Đúng','Sai'],answer:1,why:'Sai. “Five” là số 5; số 4 là “four”.'}
]},
{title:'Tuần 8 — Numbers — Số đếm 6 đến 10',questions:[
{prompt:'Số “eight” là số mấy?',options:['6','8','9'],answer:1,why:'Eight nghĩa là số 8.'},
{prompt:'“Ten” nghĩa là số nào?',options:['7','9','10'],answer:2,why:'Ten nghĩa là số 10.'},
{type:'fill',prompt:'Điền số tiếng Anh còn thiếu: six, seven, ___, nine, ten.',answerText:'eight',why:'Đếm theo thứ tự: six (6), seven (7), eight (8), nine (9), ten (10).',accept:['eight']},
{type:'tf',prompt:'“Ten” là số 10.',options:['Đúng','Sai'],answer:0,why:'Đúng. Ten nghĩa là số 10.'}
]},
{title:'Tuần 9 — Ôn tập giữa học kì 1 — Màu sắc và số đếm',questions:[
{prompt:'Màu của bầu trời trong tiếng Anh là gì?',options:['pink','black','blue'],answer:2,why:'Blue là màu xanh dương — màu của bầu trời.'},
{prompt:'Số “five” là số mấy?',options:['5','4','6'],answer:0,why:'Five nghĩa là số 5.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: The sky is ___. (màu xanh dương)',answerText:'blue',why:'“Blue” là màu xanh dương — màu của bầu trời.',accept:['blue']},
{type:'tf',prompt:'“Two” là số 3.',options:['Đúng','Sai'],answer:1,why:'Sai. “Two” là số 2; số 3 là “three”.'}
]},
{title:'Tuần 10 — My family — Gia đình của em',questions:[
{prompt:'“Mother” nghĩa là gì?',options:['mẹ','bố','anh trai'],answer:0,why:'Mother nghĩa là mẹ.'},
{prompt:'“Father” nghĩa là gì?',options:['mẹ','bố','em gái'],answer:1,why:'Father nghĩa là bố.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: This is my ___. (mẹ)',answerText:'mother',why:'“Mother” nghĩa là mẹ.',accept:['mother','mum','mom']},
{type:'tf',prompt:'“Father” nghĩa là bố.',options:['Đúng','Sai'],answer:0,why:'Đúng. Father nghĩa là bố.'}
]},
{title:'Tuần 11 — Pets — Thú cưng: cat, dog',questions:[
{prompt:'“Cat” là con gì?',options:['con chó','con mèo','con vịt'],answer:1,why:'Cat nghĩa là con mèo.'},
{prompt:'“Dog” là con gì?',options:['con chim','con chó','con cá'],answer:1,why:'Dog nghĩa là con chó.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: I have a small ___. (con chó)',answerText:'dog',why:'“Dog” nghĩa là con chó.',accept:['dog']},
{type:'tf',prompt:'“Cat” là con mèo.',options:['Đúng','Sai'],answer:0,why:'Đúng. Cat nghĩa là con mèo.'}
]},
{title:'Tuần 12 — Animals — Con vật quanh em: bird, fish',questions:[
{prompt:'“Bird” là con gì?',options:['con mèo','con thỏ','con chim'],answer:2,why:'Bird nghĩa là con chim.'},
{prompt:'Con cá trong tiếng Anh là gì?',options:['fish','bird','duck'],answer:0,why:'Fish nghĩa là con cá.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: A ___ can fly. (con chim)',answerText:'bird',why:'“Bird” nghĩa là con chim, biết bay.',accept:['bird']},
{type:'tf',prompt:'“Fish” là con cá.',options:['Đúng','Sai'],answer:0,why:'Đúng. Fish nghĩa là con cá.'}
]},
{title:'Tuần 13 — My body — Cơ thể của em',questions:[
{prompt:'“Eye” là bộ phận nào?',options:['con mắt','cái tai','cái mũi'],answer:0,why:'Eye nghĩa là con mắt.'},
{prompt:'Em nghe bằng gì? Chọn từ đúng: “ear”.',options:['cái miệng','cái tai','bàn tay'],answer:1,why:'Ear nghĩa là cái tai, dùng để nghe.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: I see with my ___. (đôi mắt)',answerText:'eyes',why:'“Eyes” là đôi mắt, dùng để nhìn.',accept:['eyes','eye']},
{type:'tf',prompt:'“Nose” là cái tai.',options:['Đúng','Sai'],answer:1,why:'Sai. “Nose” là cái mũi; cái tai là “ear”.'}
]},
{title:'Tuần 14 — Fruits — Trái cây: apple, banana',questions:[
{prompt:'“Apple” là quả gì?',options:['quả chuối','quả táo','quả cam'],answer:1,why:'Apple nghĩa là quả táo.'},
{prompt:'Quả chuối trong tiếng Anh là gì?',options:['apple','grape','banana'],answer:2,why:'Banana nghĩa là quả chuối.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: I like ___. (quả chuối)',answerText:'banana',why:'“Banana” nghĩa là quả chuối.',accept:['banana','bananas']},
{type:'tf',prompt:'“Apple” là quả táo.',options:['Đúng','Sai'],answer:0,why:'Đúng. Apple nghĩa là quả táo.'}
]},
{title:'Tuần 15 — Food and drinks — Đồ ăn, thức uống: milk, cake',questions:[
{prompt:'“Milk” nghĩa là gì?',options:['nước cam','cơm','sữa'],answer:2,why:'Milk nghĩa là sữa.'},
{prompt:'Em ăn sáng với bánh, tiếng Anh là “cake”. “Cake” là gì?',options:['bánh ngọt','súp','kẹo mút'],answer:0,why:'Cake nghĩa là bánh ngọt.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: I drink ___ every morning. (sữa)',answerText:'milk',why:'“Milk” nghĩa là sữa.',accept:['milk']},
{type:'tf',prompt:'“Cake” nghĩa là cơm.',options:['Đúng','Sai'],answer:1,why:'Sai. “Cake” nghĩa là bánh ngọt; cơm là “rice”.'}
]},
{title:'Tuần 16 — Clothes — Quần áo: hat, shirt',questions:[
{prompt:'“Hat” là cái gì?',options:['cái mũ / nón','cái áo','đôi giày'],answer:0,why:'Hat nghĩa là cái mũ, cái nón.'},
{prompt:'Cái áo trong tiếng Anh là gì?',options:['hat','shirt','sock'],answer:1,why:'Shirt nghĩa là cái áo.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: I wear a ___ on my head. (cái mũ)',answerText:'hat',why:'“Hat” nghĩa là cái mũ, đội trên đầu.',accept:['hat']},
{type:'tf',prompt:'“Shirt” là cái áo.',options:['Đúng','Sai'],answer:0,why:'Đúng. Shirt nghĩa là cái áo.'}
]},
{title:'Tuần 17 — Weather — Thời tiết: sunny, rainy',questions:[
{prompt:'“Sunny” tả thời tiết thế nào?',options:['mưa','nắng','gió lạnh'],answer:1,why:'Sunny nghĩa là trời nắng.'},
{prompt:'Trời mưa trong tiếng Anh là “rainy”. Khi mưa em cần gì?',options:['kính râm','quạt','áo mưa / ô'],answer:2,why:'Rainy là trời mưa, em cần áo mưa hoặc ô.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: It is ___ today. (trời nắng)',answerText:'sunny',why:'“Sunny” nghĩa là trời nắng.',accept:['sunny']},
{type:'tf',prompt:'“Rainy” nghĩa là trời nắng.',options:['Đúng','Sai'],answer:1,why:'Sai. “Rainy” nghĩa là trời mưa; trời nắng là “sunny”.'}
]},
{title:'Tuần 18 — Ôn tập cuối học kì 1 — Chào hỏi và tạm biệt',questions:[
{prompt:'Khi tạm biệt, em nói:',options:['Goodbye!','Thank you!','Good morning!'],answer:0,why:'Goodbye! dùng khi tạm biệt.'},
{prompt:'Trước khi ra về, cô giáo nói “Goodbye, class!”. Em đáp lại thế nào?',options:['Good morning!','Hello!','Goodbye, teacher!'],answer:2,why:'Khi tạm biệt, em đáp Goodbye, teacher!'},
{type:'fill',prompt:'Điền lời chào còn thiếu: When I leave, I say: “___!” (tạm biệt)',answerText:'Goodbye',why:'“Goodbye!” dùng để nói tạm biệt khi ra về.',accept:['Goodbye','Bye']},
{type:'tf',prompt:'“Good morning!” là lời chào buổi sáng.',options:['Đúng','Sai'],answer:0,why:'Đúng. Good morning! là lời chào dùng vào buổi sáng.'}
]},
{title:'Tuần 19 — Toys — Đồ chơi: ball, kite',questions:[
{prompt:'“Ball” nghĩa là gì?',options:['quả bóng','con diều','búp bê'],answer:0,why:'Ball nghĩa là quả bóng.'},
{prompt:'Con diều trong tiếng Anh là gì?',options:['ball','kite','car'],answer:1,why:'Kite nghĩa là con diều.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: I play with a ___. (quả bóng)',answerText:'ball',why:'“Ball” nghĩa là quả bóng.',accept:['ball']},
{type:'tf',prompt:'“Kite” là con búp bê.',options:['Đúng','Sai'],answer:1,why:'Sai. “Kite” là con diều; búp bê là “doll”.'}
]},
{title:'Tuần 20 — At home — Trong nhà: bed, door',questions:[
{prompt:'“Bed” là cái gì?',options:['cái cửa','cái giường','cái tủ'],answer:1,why:'Bed nghĩa là cái giường.'},
{prompt:'Cái cửa trong tiếng Anh là gì?',options:['bed','chair','door'],answer:2,why:'Door nghĩa là cái cửa.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: I sleep on my ___. (cái giường)',answerText:'bed',why:'“Bed” nghĩa là cái giường, nơi em ngủ.',accept:['bed']},
{type:'tf',prompt:'“Door” là cái cửa.',options:['Đúng','Sai'],answer:0,why:'Đúng. Door nghĩa là cái cửa.'}
]},
{title:'Tuần 21 — Actions — Hành động em làm được: run, swim',questions:[
{prompt:'“Run” nghĩa là hành động gì?',options:['bơi','ngủ','chạy'],answer:2,why:'Run nghĩa là chạy.'},
{prompt:'“I can swim.” nghĩa là gì?',options:['Em biết bơi.','Em biết hát.','Em biết vẽ.'],answer:0,why:'Swim là bơi, can là có thể/biết làm.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: I can ___. (chạy)',answerText:'run',why:'“Run” nghĩa là chạy.',accept:['run']},
{type:'tf',prompt:'“Swim” nghĩa là ngủ.',options:['Đúng','Sai'],answer:1,why:'Sai. “Swim” nghĩa là bơi; ngủ là “sleep”.'}
]},
{title:'Tuần 22 — Actions — Sing, dance, read',questions:[
{prompt:'“Sing” nghĩa là gì?',options:['hát','nhảy múa','đọc sách'],answer:0,why:'Sing nghĩa là hát.'},
{prompt:'Em đọc sách trong tiếng Anh: “I ___ a book.” Điền từ đúng.',options:['swim','read','run'],answer:1,why:'Read a book nghĩa là đọc sách.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: I can ___ a song. (hát)',answerText:'sing',why:'“Sing” nghĩa là hát.',accept:['sing']},
{type:'tf',prompt:'“Read” nghĩa là đọc sách.',options:['Đúng','Sai'],answer:0,why:'Đúng. Read nghĩa là đọc.'}
]},
{title:'Tuần 23 — Nature — Thiên nhiên: sun, tree, flower',questions:[
{prompt:'“Sun” là gì trên bầu trời?',options:['mặt trăng','mặt trời','ngôi sao'],answer:1,why:'Sun nghĩa là mặt trời.'},
{prompt:'“Flower” nghĩa là gì?',options:['cái cây','đám mây','bông hoa'],answer:2,why:'Flower nghĩa là bông hoa.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: The ___ is yellow and hot. (mặt trời)',answerText:'sun',why:'“Sun” nghĩa là mặt trời.',accept:['sun']},
{type:'tf',prompt:'“Moon” là mặt trời.',options:['Đúng','Sai'],answer:1,why:'Sai. “Moon” là mặt trăng; mặt trời là “sun”.'}
]},
{title:'Tuần 24 — Days of the week — Các ngày trong tuần',questions:[
{prompt:'“Monday” là thứ mấy?',options:['Thứ Sáu','Chủ Nhật','Thứ Hai'],answer:2,why:'Monday là Thứ Hai, ngày đầu tuần học.'},
{prompt:'Ngày Chủ Nhật trong tiếng Anh là gì?',options:['Sunday','Monday','Friday'],answer:0,why:'Sunday nghĩa là Chủ Nhật.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: Today is ___. (Thứ Hai)',answerText:'Monday',why:'“Monday” là Thứ Hai.',accept:['Monday']},
{type:'tf',prompt:'“Sunday” là Chủ Nhật.',options:['Đúng','Sai'],answer:0,why:'Đúng. Sunday nghĩa là Chủ Nhật.'}
]},
{title:'Tuần 25 — Feelings — Cảm xúc: happy, sad',questions:[
{prompt:'“Happy” tả cảm xúc gì?',options:['vui vẻ','buồn','mệt'],answer:0,why:'Happy nghĩa là vui vẻ.'},
{prompt:'Khi đói bụng, tiếng Anh là “hungry”. “Hungry” nghĩa là gì?',options:['no','đói','khát'],answer:1,why:'Hungry nghĩa là đói bụng.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: I am ___ today. (vui vẻ)',answerText:'happy',why:'“Happy” nghĩa là vui vẻ.',accept:['happy']},
{type:'tf',prompt:'“Sad” nghĩa là vui vẻ.',options:['Đúng','Sai'],answer:1,why:'Sai. “Sad” nghĩa là buồn; vui vẻ là “happy”.'}
]},
{title:'Tuần 26 — Transport — Phương tiện: bike, bus, car',questions:[
{prompt:'“Bike” là phương tiện gì?',options:['xe buýt','xe đạp','ô tô'],answer:1,why:'Bike nghĩa là xe đạp.'},
{prompt:'Em đi xe buýt đến trường: “I go to school by ___.”',options:['bike','foot','bus'],answer:2,why:'Bus nghĩa là xe buýt.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: I go to school by ___. (xe đạp)',answerText:'bike',why:'“Bike” nghĩa là xe đạp.',accept:['bike','bicycle']},
{type:'tf',prompt:'“Bus” là xe buýt.',options:['Đúng','Sai'],answer:0,why:'Đúng. Bus nghĩa là xe buýt.'}
]},
{title:'Tuần 27 — Ôn tập giữa học kì 2',questions:[
{prompt:'“Thank you!” nghĩa là gì?',options:['Xin lỗi!','Tạm biệt!','Cảm ơn bạn!'],answer:2,why:'Thank you dùng để nói cảm ơn.'},
{prompt:'Số “nine” là số mấy?',options:['9','8','10'],answer:0,why:'Nine nghĩa là số 9.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: “___ you very much!” (Cảm ơn bạn nhiều!)',answerText:'Thank',why:'“Thank you very much!” nghĩa là “Cảm ơn bạn nhiều!”',accept:['Thank']},
{type:'tf',prompt:'“Sorry” nghĩa là cảm ơn.',options:['Đúng','Sai'],answer:1,why:'Sai. “Sorry” nghĩa là xin lỗi; cảm ơn là “thank you”.'}
]},
{title:'Tuần 28 — Places — Nơi chốn: park, zoo',questions:[
{prompt:'“Park” là nơi nào?',options:['công viên','vườn thú','trường học'],answer:0,why:'Park nghĩa là công viên.'},
{prompt:'Nơi có nhiều con vật để xem là “zoo”. “Zoo” nghĩa là gì?',options:['công viên','vườn thú / sở thú','thư viện'],answer:1,why:'Zoo nghĩa là vườn thú.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: I play in the ___. (công viên)',answerText:'park',why:'“Park” nghĩa là công viên.',accept:['park']},
{type:'tf',prompt:'“Zoo” là vườn thú.',options:['Đúng','Sai'],answer:0,why:'Đúng. Zoo nghĩa là vườn thú.'}
]},
{title:'Tuần 29 — At the zoo — Con vật ở vườn thú',questions:[
{prompt:'“Elephant” là con gì?',options:['con khỉ','con voi','con hổ'],answer:1,why:'Elephant nghĩa là con voi.'},
{prompt:'Con khỉ trong tiếng Anh là gì?',options:['tiger','lion','monkey'],answer:2,why:'Monkey nghĩa là con khỉ.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: The ___ is big and grey. (con voi)',answerText:'elephant',why:'“Elephant” nghĩa là con voi.',accept:['elephant']},
{type:'tf',prompt:'“Monkey” là con hổ.',options:['Đúng','Sai'],answer:1,why:'Sai. “Monkey” là con khỉ; con hổ là “tiger”.'}
]},
{title:'Tuần 30 — Farm animals — Con vật ở nông trại',questions:[
{prompt:'“Cow” là con gì ở nông trại?',options:['con lợn','con gà','con bò'],answer:2,why:'Cow nghĩa là con bò.'},
{prompt:'Con vịt trong tiếng Anh là gì?',options:['duck','pig','goat'],answer:0,why:'Duck nghĩa là con vịt.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: The ___ gives milk. (con bò)',answerText:'cow',why:'“Cow” nghĩa là con bò, cho sữa.',accept:['cow']},
{type:'tf',prompt:'“Pig” là con lợn.',options:['Đúng','Sai'],answer:0,why:'Đúng. Pig nghĩa là con lợn (con heo).'}
]},
{title:'Tuần 31 — Fruits and vegetables — Trái cây và rau củ',questions:[
{prompt:'“Orange” (quả) là quả gì?',options:['quả cam','quả nho','quả dưa hấu'],answer:0,why:'Orange (quả) nghĩa là quả cam.'},
{prompt:'Quả nho trong tiếng Anh là gì?',options:['orange','grapes','lemon'],answer:1,why:'Grapes nghĩa là quả nho.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: An ___ is orange. (quả cam)',answerText:'orange',why:'“Orange” (quả) nghĩa là quả cam.',accept:['orange']},
{type:'tf',prompt:'“Banana” là quả chuối.',options:['Đúng','Sai'],answer:0,why:'Đúng. Banana nghĩa là quả chuối.'}
]},
{title:'Tuần 32 — Sports and games — Thể thao: football',questions:[
{prompt:'“Football” là môn thể thao nào?',options:['cầu lông','bóng đá','bơi lội'],answer:1,why:'Football nghĩa là bóng đá.'},
{prompt:'Em dùng vợt đánh cầu lông: môn đó là “badminton”. “Badminton” là gì?',options:['bóng bàn','đá cầu','cầu lông'],answer:2,why:'Badminton nghĩa là môn cầu lông.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: I play ___ with my friends. (bóng đá)',answerText:'football',why:'“Football” nghĩa là bóng đá.',accept:['football']},
{type:'tf',prompt:'“Football” là môn bơi lội.',options:['Đúng','Sai'],answer:1,why:'Sai. “Football” là môn bóng đá; bơi lội là “swimming”.'}
]},
{title:'Tuần 33 — Seasons and weather — Mùa và thời tiết',questions:[
{prompt:'“Hot” tả thời tiết thế nào?',options:['lạnh','mát','nóng'],answer:2,why:'Hot nghĩa là nóng.'},
{prompt:'Mùa xuân trong tiếng Anh là gì?',options:['spring','summer','winter'],answer:0,why:'Spring nghĩa là mùa xuân.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: It is ___ in summer. (nóng)',answerText:'hot',why:'“Hot” nghĩa là nóng.',accept:['hot']},
{type:'tf',prompt:'“Cold” nghĩa là lạnh.',options:['Đúng','Sai'],answer:0,why:'Đúng. Cold nghĩa là lạnh.'}
]},
{title:'Tuần 34 — In class — Hoạt động trong lớp',questions:[
{prompt:'“Listen” nghĩa là hành động gì?',options:['lắng nghe','nói','viết'],answer:0,why:'Listen nghĩa là lắng nghe.'},
{prompt:'Cô giáo bảo mở sách: “___ your book.” Điền từ đúng.',options:['Close','Open','Eat'],answer:1,why:'Open your book nghĩa là Mở sách ra.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: Please ___ to the teacher. (lắng nghe)',answerText:'listen',why:'“Listen” nghĩa là lắng nghe.',accept:['listen']},
{type:'tf',prompt:'“Write” nghĩa là lắng nghe.',options:['Đúng','Sai'],answer:1,why:'Sai. “Write” nghĩa là viết; lắng nghe là “listen”.'}
]},
{title:'Tuần 35 — Ôn tập và đánh giá cuối học kì 2',questions:[
{prompt:'“School” nghĩa là gì?',options:['bệnh viện','trường học','chợ'],answer:1,why:'School nghĩa là trường học.'},
{prompt:'Câu nào chào bạn vào buổi chiều?',options:['Good night!','Goodbye!','Good afternoon!'],answer:2,why:'Good afternoon là lời chào buổi chiều.'},
{type:'fill',prompt:'Điền từ tiếng Anh còn thiếu: I go to ___ every day. (trường học)',answerText:'school',why:'“School” nghĩa là trường học.',accept:['school']},
{type:'tf',prompt:'“School” là trường học.',options:['Đúng','Sai'],answer:0,why:'Đúng. School nghĩa là trường học.'}
]},
]},
]};
