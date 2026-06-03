const mongoose = require('mongoose');

const MONGO_URI = "mongodb://ganepm_db_user:Pornpimol78@ac-a0tnncq-shard-00-00.rpemqka.mongodb.net:27017,ac-a0tnncq-shard-00-01.rpemqka.mongodb.net:27017,ac-a0tnncq-shard-00-02.rpemqka.mongodb.net:27017/muapp?ssl=true&replicaSet=atlas-3s2pck-shard-0&authSource=admin&retryWrites=true&w=majority";

const worshipStepSchema = new mongoose.Schema({
    stepNumber: Number,
    title: String,
    description: String
}, { _id: false });

const placeSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    googleMap: String,
    appleMap: String,
    tags: [String],
    howToPray: String,
    rating: Number,
    successRate: Number,
    worshipGuide: [worshipStepSchema],
    suitableFor: [String],
    successCount: { type: Number, default: 0 },
    totalPrayerCount: { type: Number, default: 0 }
});

const Place = mongoose.model('Place', placeSchema);

const places = [
    {
        name: "วัดพระแก้ว",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Wiang_Kum_Kam_Temple.jpg/1280px-Wiang_Kum_Kam_Temple.jpg",
        description: "วัดพระศรีรัตนศาสดาราม หรือวัดพระแก้ว ตั้งอยู่ในบริเวณพระบรมมหาราชวัง กรุงเทพมหานคร เป็นที่ประดิษฐานพระพุทธมหามณีรัตนปฏิมากร (พระแก้วมรกต) พระพุทธรูปคู่บ้านคู่เมืองที่ศักดิ์สิทธิ์ที่สุดของไทย สร้างขึ้นในรัชสมัยพระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราช รัชกาลที่ 1",
        googleMap: "https://maps.google.com/?q=13.7516,100.4925",
        appleMap: "",
        tags: ["โชคลาภ", "ความสำเร็จ"],
        howToPray: "จุดธูป 9 ดอก เทียน 1 คู่ ดอกบัวขาว 3 ดอก กราบ 3 ครั้ง ตั้งจิตอธิษฐานชื่อ-นามสกุล วันเดือนปีเกิด และที่อยู่",
        rating: 4.9,
        successRate: 92,
        successCount: 1850,
        totalPrayerCount: 2010,
        suitableFor: ["โชคลาภ", "การงาน"],
        worshipGuide: [
            { stepNumber: 1, title: "เตรียมเครื่องสักการะ", description: "ซื้อชุดธูปเทียนดอกไม้จากร้านในวัด ประกอบด้วยดอกบัวขาว 3 ดอก ธูป 9 ดอก เทียน 1 คู่ และทอง 1 แผ่น" },
            { stepNumber: 2, title: "กราบไหว้หน้าพระอุโบสถ", description: "เข้าแถวอย่างสงบ ถอดรองเท้า กราบ 3 ครั้งก่อนก้าวเข้าพระอุโบสถ" },
            { stepNumber: 3, title: "จุดธูปเทียนบูชาพระแก้วมรกต", description: "จุดธูป 9 ดอก เทียน 1 คู่ ปักในกระถางที่จัดไว้ กราบลง 3 ครั้ง" },
            { stepNumber: 4, title: "ตั้งจิตอธิษฐาน", description: "นั่งสมาธิสักครู่ กล่าวนะโม 3 จบ บอกชื่อ-สกุล วันเกิด ที่อยู่ แล้วขอพรตามความปรารถนา" },
            { stepNumber: 5, title: "กราบลาพระ", description: "กราบ 3 ครั้งแล้วถอยหลังออก ไม่หันหลังให้พระ เป็นการแสดงความเคารพสูงสุด" }
        ]
    },
    {
        name: "วัดโพธิ์",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Reclining_Buddha_at_Wat_Pho.jpg/1280px-Reclining_Buddha_at_Wat_Pho.jpg",
        description: "วัดพระเชตุพนวิมลมังคลาราม หรือวัดโพธิ์ เป็นวัดเก่าแก่ที่มีพระนอนที่ใหญ่ที่สุดในประเทศไทย ยาว 46 เมตร สูง 15 เมตร ปิดทองทั้งองค์ ฝ่าพระบาทประดับมุกเป็นภาพมงคล 108 ประการ นอกจากนี้ยังเป็นต้นกำเนิดของนวดแผนไทย",
        googleMap: "https://maps.google.com/?q=13.7465,100.4930",
        appleMap: "",
        tags: ["สุขภาพ", "โชคลาภ"],
        howToPray: "กราบไหว้พระนอนด้วยดอกบัว 3 ดอก ธูป 3 ดอก เหรียญหยอดกระปุก 108 ใบเพื่อความเป็นมงคล",
        rating: 4.8,
        successRate: 88,
        successCount: 1240,
        totalPrayerCount: 1410,
        suitableFor: ["สุขภาพ", "โชคลาภ"],
        worshipGuide: [
            { stepNumber: 1, title: "เตรียมดอกบัวและธูปเทียน", description: "เตรียมดอกบัวสีชมพู 3 ดอก ธูป 3 ดอก เทียน 1 คู่ และเหรียญ 108 เหรียญ" },
            { stepNumber: 2, title: "กราบไหว้พระนอน", description: "ยืนหน้าพระนอน กราบ 3 ครั้ง จุดธูปเทียน ปักในกระถาง" },
            { stepNumber: 3, title: "หยอดเหรียญ 108 กระปุก", description: "หยอดเหรียญลงในกระปุก 108 ใบที่เรียงตามแนวพระนอน เชื่อว่าจะขจัดทุกข์โศก 108 ประการ" },
            { stepNumber: 4, title: "อธิษฐานขอพร", description: "ตั้งจิตอธิษฐานขอสุขภาพแข็งแรง โชคลาภ ความเจริญรุ่งเรือง" },
            { stepNumber: 5, title: "เดินรอบพระวิหาร", description: "เดินรอบพระอุโบสถ 3 รอบตามเข็มนาฬิกาเพื่อความเป็นสิริมงคล" }
        ]
    },
    {
        name: "ศาลพระพรหมเอราวัณ",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Erawan_Shrine.jpg/1280px-Erawan_Shrine.jpg",
        description: "ศาลพระพรหมเอราวัณ หรือ ท้าวมหาพรหม ตั้งอยู่หน้าโรงแรมแกรนด์ไฮแอท เอราวัณ ย่านราชประสงค์ เป็นที่ประดิษฐานพระพรหม 4 หน้าที่ศักดิ์สิทธิ์ที่สุดแห่งหนึ่งในกรุงเทพฯ ผู้คนมาขอพรด้านความรัก โชคลาภ และหน้าที่การงานอย่างไม่ขาดสาย",
        googleMap: "https://maps.google.com/?q=13.7445,100.5395",
        appleMap: "",
        tags: ["โชคลาภ", "ความรัก"],
        howToPray: "ดอกบัว 4 ดอก ธูป 4 ดอก เทียน 1 คู่ ไม้หอม 4 อัน กราบ 4 ทิศรอบพระพรหม",
        rating: 4.8,
        successRate: 90,
        successCount: 2100,
        totalPrayerCount: 2340,
        suitableFor: ["โชคลาภ", "ความรัก", "การงาน"],
        worshipGuide: [
            { stepNumber: 1, title: "เตรียมเครื่องบูชา", description: "ซื้อชุดบูชาพระพรหมจากร้านหน้าศาล ประกอบด้วยดอกบัว 4 ดอก ธูป 4 ดอก เทียน 4 เล่ม ไม้หอม และมาลัยดาวเรือง" },
            { stepNumber: 2, title: "กราบไหว้ทั้ง 4 หน้า", description: "เริ่มกราบไหว้ทิศเหนือก่อน แล้วเดินทวนเข็มนาฬิกาครบ 4 ทิศ กราบทิศละ 1 ครั้ง" },
            { stepNumber: 3, title: "จุดธูปเทียนและถวายดอกบัว", description: "จุดธูป 4 ดอก เทียน 4 เล่ม ถวายดอกบัว 4 ดอก ที่แต่ละหน้าของพระพรหม" },
            { stepNumber: 4, title: "อธิษฐานขอพร", description: "ยืนตรงหน้าพระพรหม ประนมมือ ตั้งจิตขอพรด้านความรัก โชคลาภ หรือการงาน พูดชัดเจนถึงสิ่งที่ต้องการ" },
            { stepNumber: 5, title: "บนรำแก้บน", description: "หากพรสำเร็จ กลับมาแก้บนด้วยการว่าจ้างนาฏศิลป์รำถวายพระพรหม เป็นธรรมเนียมสำคัญ" }
        ]
    },
    {
        name: "วัดพระธาตุดอยสุเทพ",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Doi_Suthep_temple%2C_Chiang_Mai%2C_Thailand.jpg/1280px-Doi_Suthep_temple%2C_Chiang_Mai%2C_Thailand.jpg",
        description: "วัดพระธาตุดอยสุเทพราชวรวิหาร ตั้งอยู่บนยอดดอยสุเทพ จังหวัดเชียงใหม่ สูงจากระดับน้ำทะเล 1,053 เมตร เป็นวัดที่เป็นสัญลักษณ์ของเมืองเชียงใหม่ พระธาตุสูง 22 เมตร หุ้มด้วยทองแดงชุบทอง มีประวัติกว่า 600 ปี",
        googleMap: "https://maps.google.com/?q=18.8048,98.9217",
        appleMap: "",
        tags: ["โชคลาภ", "ความสำเร็จ"],
        howToPray: "เดินขึ้นบันได 309 ขั้น เวียนเทียนรอบพระธาตุ 3 รอบ จุดธูปเทียน กราบไหว้ด้วยความเคารพ",
        rating: 4.9,
        successRate: 91,
        successCount: 1680,
        totalPrayerCount: 1845,
        suitableFor: ["โชคลาภ", "การงาน", "การเรียน"],
        worshipGuide: [
            { stepNumber: 1, title: "ขึ้นบันได 309 ขั้น", description: "ค่อยๆ เดินขึ้นบันไดนาค 309 ขั้น ระหว่างเดินให้ตั้งจิตระลึกถึงพระรัตนตรัย" },
            { stepNumber: 2, title: "ซื้อเทียนและดอกไม้", description: "ซื้อชุดบูชาจากร้านหน้าวัด ประกอบด้วยเทียน ธูป ดอกดาวเรือง และผ้าห่มพระธาตุ (สีเหลือง)" },
            { stepNumber: 3, title: "เวียนเทียนรอบพระธาตุ", description: "ถือเทียนและดอกไม้ เดินเวียนรอบพระธาตุตามเข็มนาฬิกา 3 รอบ สวดมนต์ระหว่างเดิน" },
            { stepNumber: 4, title: "กราบไหว้และอธิษฐาน", description: "กราบไหว้ที่จุดสักการะหลัก ตั้งจิตขอพร บอกชื่อ-นามสกุล และสิ่งที่ปรารถนา" },
            { stepNumber: 5, title: "ผูกผ้าสีเหลืองถวาย", description: "ผูกผ้าสีเหลืองรอบพระธาตุหรือต้นไม้ศักดิ์สิทธิ์ เพื่อเป็นการบนบานและแสดงความศรัทธา" }
        ]
    },
    {
        name: "ศาลเจ้าพ่อหลักเมืองกรุงเทพ",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bangkok_City_Pillar_Shrine.jpg/1280px-Bangkok_City_Pillar_Shrine.jpg",
        description: "ศาลหลักเมืองกรุงเทพมหานคร สร้างขึ้นพร้อมกับการสถาปนากรุงรัตนโกสินทร์ในปี พ.ศ. 2325 เป็นเสาหลักเมืองที่ถือเป็นศูนย์กลางและจิตใจของเมือง มีเทวดารักษาเมือง เจ้าพ่อหลักเมืองเป็นที่เคารพสักการะของชาวกรุงเทพฯ และนักท่องเที่ยวทั่วโลก",
        googleMap: "https://maps.google.com/?q=13.7493,100.4928",
        appleMap: "",
        tags: ["โชคลาภ", "ความสำเร็จ"],
        howToPray: "ธูป 3 ดอก เทียน 1 คู่ ดอกบัว 3 ดอก กราบไหว้เจ้าพ่อหลักเมืองและเทวดาทั้ง 4 ทิศ",
        rating: 4.7,
        successRate: 87,
        successCount: 1120,
        totalPrayerCount: 1287,
        suitableFor: ["โชคลาภ", "การงาน", "ปลดหนี้"],
        worshipGuide: [
            { stepNumber: 1, title: "เตรียมเครื่องสักการะ", description: "เตรียมธูป 3 ดอก เทียน 1 คู่ ดอกบัว 3 ดอก หรือซื้อชุดสำเร็จในราคาย่อมเยา" },
            { stepNumber: 2, title: "กราบไหว้เจ้าพ่อหลักเมือง", description: "กราบ 3 ครั้ง จุดธูปเทียน ถวายดอกไม้ ระลึกถึงองค์เจ้าพ่อหลักเมืองผู้คุ้มครองบ้านเมือง" },
            { stepNumber: 3, title: "ไหว้เทวดา 4 ทิศ", description: "ไหว้เทวดาที่ 4 มุมของศาล แต่ละทิศมีเทวดาคุ้มครองด้านต่างกัน" },
            { stepNumber: 4, title: "อธิษฐานขอพรด้านการงานและโชคลาภ", description: "ตั้งจิตขอพรด้านหน้าที่การงาน การค้า ความมั่งคั่ง และความปลอดภัย" },
            { stepNumber: 5, title: "แก้บนด้วยหัวหมูและผลไม้", description: "หากพรสำเร็จ นำหัวหมูต้ม ผลไม้ และเหล้ามาแก้บน เป็นธรรมเนียมโบราณ" }
        ]
    },
    {
        name: "วัดสระเกศ (ภูเขาทอง)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Wat_Saket%2C_Bangkok%2C_Jan_2013.jpg/1280px-Wat_Saket%2C_Bangkok%2C_Jan_2013.jpg",
        description: "วัดสระเกศราชวรมหาวิหาร หรือ ภูเขาทอง เป็นวัดโบราณสร้างตั้งแต่สมัยอยุธยา เจดีย์ทองคำขนาดใหญ่ตั้งอยู่บนยอดเขาสูง 80 เมตร สามารถมองเห็นได้จากระยะไกล ภายในบรรจุพระบรมสารีริกธาตุจากอินเดีย ต้องเดินขึ้นบันได 318 ขั้นเพื่อไปกราบไหว้",
        googleMap: "https://maps.google.com/?q=13.7547,100.5078",
        appleMap: "",
        tags: ["โชคลาภ", "สุขภาพ"],
        howToPray: "เดินขึ้นบันได 318 ขั้น เวียนเทียนรอบเจดีย์ทองคำ 3 รอบ กราบไหว้พระบรมสารีริกธาตุ",
        rating: 4.7,
        successRate: 85,
        successCount: 890,
        totalPrayerCount: 1047,
        suitableFor: ["โชคลาภ", "สุขภาพ"],
        worshipGuide: [
            { stepNumber: 1, title: "เดินขึ้นบันได 318 ขั้น", description: "เดินขึ้นบันไดเวียนรอบภูเขาทองอย่างช้าๆ ระหว่างเดินให้สวดมนต์ระลึกถึงพระธรรม" },
            { stepNumber: 2, title: "ชมทิวทัศน์และสักการะ", description: "เมื่อถึงยอดแล้ว ชมทิวทัศน์กรุงเทพฯ รอบทิศ จากนั้นกราบไหว้พระบรมสารีริกธาตุ" },
            { stepNumber: 3, title: "เวียนเทียนรอบเจดีย์", description: "เดินเวียนรอบเจดีย์ทองคำตามเข็มนาฬิกา 3 รอบ พร้อมสวดมนต์ภาวนา" },
            { stepNumber: 4, title: "ตั้งจิตอธิษฐาน", description: "กราบไหว้และตั้งจิตอธิษฐานขอพรสิ่งที่ปรารถนา" }
        ]
    },
    {
        name: "วัดอรุณราชวราราม",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Wat_Arun_at_sunset.jpg/1280px-Wat_Arun_at_sunset.jpg",
        description: "วัดอรุณราชวราราม หรือ วัดแจ้ง ตั้งอยู่ริมแม่น้ำเจ้าพระยา เขตบางกอกใหญ่ กรุงเทพฯ เป็นวัดเก่าแก่ที่สวยงามที่สุดแห่งหนึ่งของไทย พระปรางค์ทรงขอมสูง 82 เมตร ประดับด้วยเศษกระเบื้องสีสันงดงาม เป็นสัญลักษณ์สำคัญของกรุงเทพฯ",
        googleMap: "https://maps.google.com/?q=13.7437,100.4888",
        appleMap: "",
        tags: ["โชคลาภ", "ความรัก"],
        howToPray: "กราบไหว้พระประธาน เดินชมรอบพระปรางค์ ทำบุญตักบาตร ขอพรด้านชีวิตคู่และครอบครัว",
        rating: 4.8,
        successRate: 86,
        successCount: 1050,
        totalPrayerCount: 1220,
        suitableFor: ["ความรัก", "ครอบครัว"],
        worshipGuide: [
            { stepNumber: 1, title: "ข้ามเรือสู่วัดอรุณ", description: "นั่งเรือข้ามฟากจากท่าเรือท่าเตียน ค่าโดยสารเพียงเล็กน้อย มองเห็นพระปรางค์งามตระการตา" },
            { stepNumber: 2, title: "กราบไหว้พระประธานในพระอุโบสถ", description: "กราบไหว้พระพุทธธรรมมิศรราชโลกธาตุดิลก พระประธานสำคัญของวัด" },
            { stepNumber: 3, title: "ไหว้ท้าวเวสสุวัณ", description: "กราบไหว้ท้าวเวสสุวัณที่ประดิษฐานภายในวัด ขอพรด้านทรัพย์สินและปลดหนี้" },
            { stepNumber: 4, title: "เดินชมพระปรางค์และอธิษฐาน", description: "เดินรอบพระปรางค์ มองชมภาพประดับกระเบื้อง ตั้งจิตขอพรด้านความรักและครอบครัว" }
        ]
    },
    {
        name: "วัดสุทัศนเทพวราราม",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Wat_Suthat_Bangkok.jpg/1280px-Wat_Suthat_Bangkok.jpg",
        description: "วัดสุทัศนเทพวรารามราชวรมหาวิหาร เป็นวัดชั้นเอก ราชวรมหาวิหาร ประดิษฐานพระพุทธตรีโลกเชษฐ์ พระพุทธรูปสำริดขนาดใหญ่ที่สุดในประเทศไทย สูง 8 เมตร หน้าวัดมีเสาชิงช้าสีแดงเป็นสัญลักษณ์ มีจิตรกรรมฝาผนังที่สวยงามชั้นหนึ่งของไทย",
        googleMap: "https://maps.google.com/?q=13.7508,100.4985",
        appleMap: "",
        tags: ["โชคลาภ", "ความสำเร็จ"],
        howToPray: "กราบไหว้พระพุทธตรีโลกเชษฐ์ จุดธูปเทียน เวียนเทียนรอบพระวิหาร ขอพรสิ่งศักดิ์สิทธิ์",
        rating: 4.7,
        successRate: 84,
        successCount: 760,
        totalPrayerCount: 905,
        suitableFor: ["โชคลาภ", "การงาน"],
        worshipGuide: [
            { stepNumber: 1, title: "นมัสการพระพุทธตรีโลกเชษฐ์", description: "เข้าสู่พระวิหารหลวง กราบไหว้พระพุทธตรีโลกเชษฐ์ พระพุทธรูปสำริดใหญ่ที่สุดในไทย" },
            { stepNumber: 2, title: "ชมจิตรกรรมฝาผนัง", description: "เดินชมจิตรกรรมฝาผนังอันงดงามที่วาดเรื่องราวจากวรรณคดีและชาดก" },
            { stepNumber: 3, title: "จุดธูปเทียนและอธิษฐาน", description: "จุดธูป 3 ดอก เทียน 1 คู่ กราบ 3 ครั้ง ตั้งจิตขอพรด้านการงานและความเจริญก้าวหน้า" },
            { stepNumber: 4, title: "เวียนเทียนรอบพระวิหาร", description: "เดินเวียนเทียนรอบพระวิหาร 3 รอบตามเข็มนาฬิกา สวดมนต์ระหว่างเดิน" }
        ]
    },
    {
        name: "วัดหลวงพ่อโสธร",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Wat_Sothon_Wararam_Worawihan.jpg/1280px-Wat_Sothon_Wararam_Worawihan.jpg",
        description: "วัดโสธรวรารามวรวิหาร หรือวัดหลวงพ่อโสธร ตั้งอยู่ที่อำเภอเมือง จังหวัดฉะเชิงเทรา เป็นที่ประดิษฐานหลวงพ่อโสธร พระพุทธรูปปางสมาธิศักดิ์สิทธิ์ที่ชาวไทยเคารพสักการะมาหลายร้อยปี ตำนานเล่าว่าลอยน้ำมาจากแม่น้ำบางปะกง",
        googleMap: "https://maps.google.com/?q=13.6908,101.0769",
        appleMap: "",
        tags: ["โชคลาภ", "ความรัก"],
        howToPray: "บูชาด้วยดอกบัว 3 ดอก ธูป 3 ดอก เทียน 1 คู่ กราบ 3 ครั้ง ขอพรด้านความรักและชีวิตคู่",
        rating: 4.8,
        successRate: 89,
        successCount: 1340,
        totalPrayerCount: 1506,
        suitableFor: ["โชคลาภ", "ความรัก", "ขอลูก"],
        worshipGuide: [
            { stepNumber: 1, title: "เตรียมเครื่องสักการะ", description: "ซื้อชุดบูชาหลวงพ่อโสธร ประกอบด้วยดอกบัว 3 ดอก ธูป 3 ดอก เทียน 1 คู่ และผ้าห่มพระ" },
            { stepNumber: 2, title: "กราบไหว้หลวงพ่อโสธร", description: "กราบ 3 ครั้งด้วยความเคารพ จุดธูปเทียน ปักในกระถาง ถวายดอกบัว" },
            { stepNumber: 3, title: "อธิษฐานขอพรด้านความรักและการมีบุตร", description: "ตั้งจิตขอพรด้านความรัก ชีวิตคู่ หรือการมีบุตร บอกชื่อ-สกุล อายุ และความปรารถนา" },
            { stepNumber: 4, title: "ปิดทองหลวงพ่อ", description: "ซื้อแผ่นทองแล้วลงทองที่องค์หลวงพ่อ เป็นการเสริมดวงและความเป็นสิริมงคล" },
            { stepNumber: 5, title: "ทำบุญตักบาตร", description: "ตักบาตรพระสงฆ์หน้าวัดในตอนเช้า เป็นการสะสมบุญบารมี" }
        ]
    },
    {
        name: "วัดพระพุทธบาท",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Wat_Phra_Phutthabat_Saraburi_Thailand_2016.jpg/1280px-Wat_Phra_Phutthabat_Saraburi_Thailand_2016.jpg",
        description: "วัดพระพุทธบาทราชวรมหาวิหาร อำเภอพระพุทธบาท จังหวัดสระบุรี เป็นที่ประดิษฐานรอยพระพุทธบาทจำลองในมณฑปทองคำ ยาว 1.5 เมตร กว้าง 0.5 เมตร ลึก 0.3 เมตร เชื่อกันว่าเป็นรอยพระพุทธบาทจริง ผู้คนมาสักการะเพื่อความเป็นสิริมงคลและสุขภาพดี",
        googleMap: "https://maps.google.com/?q=14.7127,100.9568",
        appleMap: "",
        tags: ["สุขภาพ", "โชคลาภ"],
        howToPray: "ถอดรองเท้าก่อนเข้ามณฑป กราบรอยพระพุทธบาท จุดธูปเทียน เวียนเทียน 3 รอบ",
        rating: 4.7,
        successRate: 86,
        successCount: 920,
        totalPrayerCount: 1070,
        suitableFor: ["สุขภาพ", "โชคลาภ"],
        worshipGuide: [
            { stepNumber: 1, title: "ถอดรองเท้าและชำระจิตใจ", description: "ถอดรองเท้าก่อนเข้ามณฑปพระพุทธบาท ตั้งจิตให้สงบ ระลึกถึงพระพุทธคุณ" },
            { stepNumber: 2, title: "กราบรอยพระพุทธบาท", description: "กราบรอยพระพุทธบาทด้วยความเคารพสูงสุด 3 ครั้ง" },
            { stepNumber: 3, title: "จุดธูปเทียนและถวายดอกไม้", description: "จุดธูป 3 ดอก เทียน 1 คู่ ถวายดอกบัวขาว ปักในกระถางที่จัดไว้" },
            { stepNumber: 4, title: "เวียนเทียนรอบมณฑป", description: "เดินเวียนรอบมณฑปพระพุทธบาท 3 รอบตามเข็มนาฬิกา ขอพรด้านสุขภาพและความสุข" },
            { stepNumber: 5, title: "อธิษฐานขอพร", description: "ตั้งจิตอธิษฐานขอสุขภาพแข็งแรง อายุยืนยาว โรคภัยไข้เจ็บหายไป" }
        ]
    },
    {
        name: "วัดพนัญเชิง",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Wat_Phanan_Choeng_Ayutthaya.jpg/1280px-Wat_Phanan_Choeng_Ayutthaya.jpg",
        description: "วัดพนัญเชิงวรวิหาร ตั้งอยู่ที่อำเภอพระนครศรีอยุธยา เป็นที่ประดิษฐานหลวงพ่อโต หรือพระพุทธไตรรัตนนายก พระพุทธรูปขนาดยักษ์สูง 19.5 เมตร วัดนี้สร้างก่อนกรุงศรีอยุธยา และมีชื่อเสียงด้านการค้าขาย เนื่องจากชาวจีนมาสักการะเพื่อขอพรด้านธุรกิจ",
        googleMap: "https://maps.google.com/?q=14.3344,100.5803",
        appleMap: "",
        tags: ["โชคลาภ", "ธุรกิจ"],
        howToPray: "บูชาหลวงพ่อโตด้วยธูปเทียนและกระดาษเงินกระดาษทอง กราบ 3 ครั้ง ขอพรด้านการค้าและธุรกิจ",
        rating: 4.7,
        successRate: 87,
        successCount: 1010,
        totalPrayerCount: 1160,
        suitableFor: ["โชคลาภ", "การงาน", "ปลดหนี้"],
        worshipGuide: [
            { stepNumber: 1, title: "ซื้อชุดบูชาสไตล์จีน", description: "ซื้อชุดบูชาแบบจีน ประกอบด้วยธูปแดง กระดาษเงินกระดาษทอง เทียนแดง และผลไม้มงคล" },
            { stepNumber: 2, title: "กราบไหว้หลวงพ่อโต", description: "กราบ 3 ครั้งด้วยความเคารพ จุดธูปแดง 3 ดอก ปักในกระถางใหญ่หน้าพระ" },
            { stepNumber: 3, title: "เผากระดาษเงินกระดาษทอง", description: "เผากระดาษมงคลในเตาที่จัดไว้ เชื่อว่าจะส่งความมั่งคั่งและโชคลาภมาให้" },
            { stepNumber: 4, title: "อธิษฐานด้านการค้าและธุรกิจ", description: "ตั้งจิตขอพรด้านการค้า ธุรกิจ โชคลาภ ให้บอกชื่อและกิจการอย่างชัดเจน" },
            { stepNumber: 5, title: "รับป้ายมงคลไปบูชา", description: "รับป้ายมงคลหรือกิ่งทองกิ่งเงินจากวัดไปแขวนในร้านหรือบ้าน เพื่อความมั่งคั่ง" }
        ]
    },
    {
        name: "วัดเจดีย์หลวงวรวิหาร",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Wat_Chedi_Luang%2C_Chiang_Mai%2C_Thailand.jpg/1280px-Wat_Chedi_Luang%2C_Chiang_Mai%2C_Thailand.jpg",
        description: "วัดเจดีย์หลวงวรวิหาร ตั้งอยู่ใจกลางเมืองเชียงใหม่ มีเจดีย์ขนาดใหญ่สร้างในศตวรรษที่ 14 เดิมสูง 90 เมตร แต่พังทลายบางส่วนจากแผ่นดินไหว ปัจจุบันเหลือสูง 60 เมตร ภายในวัดมีเสาหลักเมืองเชียงใหม่ที่ศักดิ์สิทธิ์",
        googleMap: "https://maps.google.com/?q=18.7872,98.9872",
        appleMap: "",
        tags: ["โชคลาภ", "ความสำเร็จ"],
        howToPray: "กราบไหว้เจดีย์หลักเมืองและเสาหลักเมืองเชียงใหม่ เวียนเทียน 3 รอบ ขอพรด้านความสุขและครอบครัว",
        rating: 4.7,
        successRate: 85,
        successCount: 870,
        totalPrayerCount: 1024,
        suitableFor: ["โชคลาภ", "ครอบครัว"],
        worshipGuide: [
            { stepNumber: 1, title: "กราบไหว้พระประธานในวิหาร", description: "เข้ากราบไหว้พระประธานภายในพระวิหารหลวง จุดธูปเทียนด้วยความเคารพ" },
            { stepNumber: 2, title: "กราบเสาหลักเมืองเชียงใหม่", description: "ไปกราบเสาหลักเมืองที่ประดิษฐานอยู่ภายในวัด เป็นศูนย์กลางจิตใจของเมืองเชียงใหม่" },
            { stepNumber: 3, title: "เดินชมและกราบไหว้เจดีย์หลวง", description: "เดินรอบเจดีย์หลวงขนาดใหญ่ กราบไหว้พระพุทธรูปที่ซุ้มทั้ง 4 ทิศ" },
            { stepNumber: 4, title: "อธิษฐานขอพร", description: "ตั้งจิตขอพรด้านครอบครัว ความสุข และความมั่นคงในชีวิต" }
        ]
    },
    {
        name: "วัดพระธาตุหริภุญชัย",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Wat_Phra_That_Hariphunchai.jpg/1280px-Wat_Phra_That_Hariphunchai.jpg",
        description: "วัดพระธาตุหริภุญชัยวรมหาวิหาร ตั้งอยู่ที่อำเภอเมือง จังหวัดลำพูน อายุกว่า 1,000 ปี มีเจดีย์ทองสูง 46 เมตร ภายในบรรจุพระบรมธาตุของพระสัมมาสัมพุทธเจ้า เป็นวัดที่สำคัญที่สุดของจังหวัดลำพูนและภาคเหนือ",
        googleMap: "https://maps.google.com/?q=18.5748,99.0073",
        appleMap: "",
        tags: ["โชคลาภ", "สุขภาพ"],
        howToPray: "เวียนเทียนรอบพระธาตุ 3 รอบ ทำบุญตักบาตร กราบไหว้ขอพรด้านสุขภาพและอายุยืน",
        rating: 4.8,
        successRate: 88,
        successCount: 1020,
        totalPrayerCount: 1160,
        suitableFor: ["โชคลาภ", "สุขภาพ"],
        worshipGuide: [
            { stepNumber: 1, title: "ซื้อเครื่องสักการะ", description: "ซื้อดอกดาวเรือง ธูป เทียน และผ้าสีเหลืองเพื่อห่มพระธาตุ" },
            { stepNumber: 2, title: "เวียนเทียนรอบพระธาตุ", description: "ถือเทียนและดอกไม้เดินรอบพระธาตุ 3 รอบตามเข็มนาฬิกา สวดนะโมระหว่างเดิน" },
            { stepNumber: 3, title: "ถวายผ้าห่มพระธาตุ", description: "นำผ้าสีเหลืองไปห่มพระธาตุหรือผูกที่ฐาน เป็นการบนบานและแสดงความศรัทธา" },
            { stepNumber: 4, title: "กราบไหว้และอธิษฐาน", description: "กราบพระธาตุ 3 ครั้ง ตั้งจิตขอพรสุขภาพ อายุยืน และโชคลาภ" }
        ]
    },
    {
        name: "วัดพระธาตุพนม",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Phra_That_Phanom.jpg/1280px-Phra_That_Phanom.jpg",
        description: "วัดพระธาตุพนมวรมหาวิหาร ตั้งอยู่ที่อำเภอธาตุพนม จังหวัดนครพนม พระธาตุพนมสูง 57 เมตร เชื่อกันว่าบรรจุพระอุรังคธาตุ (กระดูกหน้าอก) ของพระพุทธเจ้า เป็นพระธาตุที่ศักดิ์สิทธิ์ที่สุดแห่งหนึ่งในภาคอีสาน",
        googleMap: "https://maps.google.com/?q=16.8944,104.7244",
        appleMap: "",
        tags: ["โชคลาภ", "ความสำเร็จ"],
        howToPray: "เวียนเทียนรอบพระธาตุพนม 3 รอบ กราบไหว้ด้วยธูปเทียนดอกไม้ ขอพรสิ่งที่ปรารถนา",
        rating: 4.8,
        successRate: 89,
        successCount: 1150,
        totalPrayerCount: 1293,
        suitableFor: ["โชคลาภ", "การงาน"],
        worshipGuide: [
            { stepNumber: 1, title: "เตรียมเครื่องสักการะ", description: "ซื้อดอกดาวเรือง ธูป 3 ดอก เทียน 1 คู่ และผ้าสีเหลืองสำหรับห่มพระธาตุ" },
            { stepNumber: 2, title: "กราบไหว้พระธาตุพนม", description: "กราบ 3 ครั้ง จุดธูปเทียน ถวายดอกดาวเรือง ด้วยความเคารพและศรัทธา" },
            { stepNumber: 3, title: "เวียนเทียน 3 รอบ", description: "เดินเวียนรอบพระธาตุตามเข็มนาฬิกา 3 รอบ สวดนะโมและบทสรรเสริญพระธาตุ" },
            { stepNumber: 4, title: "อธิษฐานขอพร", description: "หยุดที่ทิศตะวันออก กราบลง ตั้งจิตขอพรด้วยความบริสุทธิ์ใจ" }
        ]
    },
    {
        name: "วัดอินทรวิหาร",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Wat_Indraviharn_Bangkok.jpg/1280px-Wat_Indraviharn_Bangkok.jpg",
        description: "วัดอินทรวิหาร ตั้งอยู่ที่แขวงบางขุนพรหม กรุงเทพฯ เป็นที่ประดิษฐานหลวงพ่อโตหรือพระพุทธรูปยืนที่ใหญ่ที่สุดในกรุงเทพฯ สูง 32 เมตร พระหัตถ์ขวาชี้ขึ้นฟ้า ชาวบ้านเรียกว่าพระยืนหรือหลวงพ่อโต มีผู้มาสักการะเพื่อขอพรด้านความรักและครอบครัว",
        googleMap: "https://maps.google.com/?q=13.7648,100.5010",
        appleMap: "",
        tags: ["ความรัก", "ความสำเร็จ"],
        howToPray: "กราบไหว้หลวงพ่อโตยืน จุดธูปเทียน ปิดทองที่พระพักตร์ ขอพรด้านความรักและครอบครัว",
        rating: 4.6,
        successRate: 83,
        successCount: 730,
        totalPrayerCount: 880,
        suitableFor: ["ความรัก", "ครอบครัว"],
        worshipGuide: [
            { stepNumber: 1, title: "กราบไหว้หลวงพ่อโตยืน", description: "เข้ามายืนหน้าองค์พระใหญ่ กราบ 3 ครั้ง จุดธูป 3 ดอก เทียน 1 คู่" },
            { stepNumber: 2, title: "ปิดทองที่พระพักตร์", description: "ซื้อแผ่นทองปิดที่พระพักตร์หรือส่วนต่างๆ ของพระ เพื่อเสริมดวงและความเป็นมงคล" },
            { stepNumber: 3, title: "อธิษฐานขอพรด้านความรัก", description: "ตั้งจิตขอพรด้านความรัก ชีวิตคู่ที่มั่นคง ครอบครัวที่อบอุ่น" },
            { stepNumber: 4, title: "ทำบุญตักบาตรหน้าวัด", description: "ตักบาตรพระสงฆ์ในตอนเช้า เพื่อสะสมบุญและเสริมดวงชะตา" }
        ]
    },
    {
        name: "วัดใหญ่ชัยมงคล",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Wat_Yai_Chai_Mongkol%2C_Ayutthaya.jpg/1280px-Wat_Yai_Chai_Mongkol%2C_Ayutthaya.jpg",
        description: "วัดใหญ่ชัยมงคล ตั้งอยู่ที่ตำบลคลองสวนพลู อำเภอพระนครศรีอยุธยา มีเจดีย์ขนาดใหญ่สร้างในสมัยสมเด็จพระนเรศวรมหาราช เพื่อเฉลิมฉลองชัยชนะยุทธหัตถีกับพม่า มีพระนอนขนาดใหญ่และพระพุทธรูปเรียงรายรอบเจดีย์อย่างงดงาม",
        googleMap: "https://maps.google.com/?q=14.3424,100.5800",
        appleMap: "",
        tags: ["โชคลาภ", "ความสำเร็จ"],
        howToPray: "กราบไหว้พระประธานและพระนอน เวียนเทียนรอบเจดีย์ใหญ่ ขอพรด้านชัยชนะและความสำเร็จ",
        rating: 4.7,
        successRate: 85,
        successCount: 880,
        totalPrayerCount: 1035,
        suitableFor: ["โชคลาภ", "การงาน"],
        worshipGuide: [
            { stepNumber: 1, title: "กราบไหว้พระประธาน", description: "เข้าไหว้พระประธานในพระวิหาร กราบ 3 ครั้ง จุดธูปเทียนด้วยความเคารพ" },
            { stepNumber: 2, title: "เดินชมและไหว้พระรอบเจดีย์", description: "เดินรอบเจดีย์ขนาดใหญ่ กราบไหว้พระพุทธรูปที่เรียงรายรอบฐานเจดีย์" },
            { stepNumber: 3, title: "กราบพระนอน", description: "กราบไหว้พระนอนที่ประดิษฐานใกล้เจดีย์ ขอพรด้านสุขภาพและความสุข" },
            { stepNumber: 4, title: "อธิษฐานขอพรชัยชนะ", description: "ตั้งจิตขอพรด้านความสำเร็จ ชัยชนะในการงาน และความมั่นคงในชีวิต" }
        ]
    },
    {
        name: "วัดมหาธาตุ อยุธยา",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wat_Mahathat_Ayutthaya_Buddha_head.jpg/1280px-Wat_Mahathat_Ayutthaya_Buddha_head.jpg",
        description: "วัดมหาธาตุ ตั้งอยู่ในเกาะเมืองอยุธยา เป็นวัดที่สร้างในสมัยต้นกรุงศรีอยุธยา เคยเป็นที่ประทับของสมเด็จพระสังฆราช มีปรางค์ประธานสูงใหญ่อยู่ตรงกลาง จุดเด่นที่มีชื่อเสียงระดับโลกคือพระพักตร์พระพุทธรูปที่ฝังอยู่ในรากต้นโพธิ์อย่างลึกซึ้ง",
        googleMap: "https://maps.google.com/?q=14.3557,100.5680",
        appleMap: "",
        tags: ["โชคลาภ", "สุขภาพ"],
        howToPray: "กราบไหว้ซากปรางค์ประธาน กราบพระพักตร์ในรากโพธิ์ด้วยความเคารพ ห้ามถ่ายรูปโดยเอาเท้าชี้",
        rating: 4.6,
        successRate: 82,
        successCount: 690,
        totalPrayerCount: 840,
        suitableFor: ["โชคลาภ", "การเรียน"],
        worshipGuide: [
            { stepNumber: 1, title: "เดินชมบริเวณวัด", description: "เดินชมซากปรางค์และพระพุทธรูปโบราณรอบบริเวณวัดด้วยความเคารพ" },
            { stepNumber: 2, title: "กราบพระพักตร์ในรากโพธิ์", description: "ก้มกราบพระพักตร์ที่ฝังอยู่ในรากต้นโพธิ์อย่างนอบน้อม ห้ามชี้เท้าหรือแตะต้องพระพักตร์" },
            { stepNumber: 3, title: "กราบปรางค์ประธาน", description: "ยืนหน้าปรางค์ประธาน กราบ 3 ครั้ง ตั้งจิตระลึกถึงความยิ่งใหญ่ของอดีต" },
            { stepNumber: 4, title: "อธิษฐานขอพร", description: "ตั้งจิตขอพรด้านปัญญา การเรียน และโชคลาภ ด้วยความสงบ" }
        ]
    },
    {
        name: "วัดเล่งเน่ยยี่ (วัดมังกรกมลาวาส)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Wat_Mangkon_Kamalawat.jpg/1280px-Wat_Mangkon_Kamalawat.jpg",
        description: "วัดมังกรกมลาวาส หรือ วัดเล่งเน่ยยี่ ตั้งอยู่ที่ถนนเจริญกรุง เขตสัมพันธวงศ์ กรุงเทพฯ เป็นวัดพุทธนิกายมหายานแบบจีน สร้างในปี พ.ศ. 2414 มีเทพเจ้าและพระโพธิสัตว์หลายองค์ เป็นศูนย์รวมความศรัทธาของชาวไทยเชื้อสายจีนในกรุงเทพฯ",
        googleMap: "https://maps.google.com/?q=13.7396,100.5120",
        appleMap: "",
        tags: ["โชคลาภ", "ธุรกิจ"],
        howToPray: "จุดธูปแดง 3 ดอก ไหว้เทพเจ้าต่างๆ รอบวัด เผากระดาษเงินกระดาษทอง ขอพรด้านธุรกิจและโชคลาภ",
        rating: 4.7,
        successRate: 88,
        successCount: 1080,
        totalPrayerCount: 1227,
        suitableFor: ["โชคลาภ", "การงาน", "ปลดหนี้"],
        worshipGuide: [
            { stepNumber: 1, title: "ซื้อชุดบูชาแบบจีน", description: "ซื้อธูปแดง 3 ดอก เทียนแดง กระดาษเงินกระดาษทอง และผลไม้มงคล 5 อย่าง" },
            { stepNumber: 2, title: "ไหว้เทพเจ้าหน้าประตู", description: "กราบไหว้เทพเจ้าที่ประตูวัดก่อน จากนั้นจึงเดินเข้าไปด้านใน" },
            { stepNumber: 3, title: "ไหว้เทพเจ้าทุกองค์ในวัด", description: "เดินไหว้เทพเจ้าที่ประดิษฐานอยู่ตามจุดต่างๆ ทั่ววัด แต่ละองค์ดูแลด้านต่างกัน" },
            { stepNumber: 4, title: "เผากระดาษมงคล", description: "เผากระดาษเงินกระดาษทองในเตาที่จัดไว้ด้านนอกวัด เพื่อส่งความมั่งคั่งให้" },
            { stepNumber: 5, title: "อธิษฐานขอพรด้านธุรกิจ", description: "ตั้งจิตขอพรด้านการค้า ธุรกิจ โชคลาภ ให้บอกชื่อและกิจการของตนเองอย่างชัดเจน" }
        ]
    },
    {
        name: "วัดพระธาตุช้างค้ำวรวิหาร",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Wat_Phra_That_Chang_Kham_Nan.jpg/1280px-Wat_Phra_That_Chang_Kham_Nan.jpg",
        description: "วัดพระธาตุช้างค้ำวรวิหาร ตั้งอยู่ใจกลางเมืองน่าน เป็นวัดสำคัญที่สุดของจังหวัดน่าน มีพระธาตุทรงระฆังแบบล้านนาประยุกต์สูง 55.5 เมตร ตั้งอยู่บนฐานช้างรอบล้อม 6 เชือก เชื่อกันว่าบรรจุพระอุรังคธาตุของพระพุทธเจ้า",
        googleMap: "https://maps.google.com/?q=18.7797,100.7768",
        appleMap: "",
        tags: ["โชคลาภ", "ความสำเร็จ"],
        howToPray: "เวียนเทียนรอบพระธาตุ 3 รอบ กราบไหว้ช้างรอบฐาน ขอพรด้านการเรียนและปัญญา",
        rating: 4.7,
        successRate: 84,
        successCount: 720,
        totalPrayerCount: 857,
        suitableFor: ["โชคลาภ", "การเรียน"],
        worshipGuide: [
            { stepNumber: 1, title: "กราบไหว้พระประธาน", description: "เข้าวิหารไหว้พระประธานก่อน กราบ 3 ครั้ง จุดธูปเทียน" },
            { stepNumber: 2, title: "กราบช้าง 6 เชือกรอบฐาน", description: "เดินกราบช้างทั้ง 6 เชือกที่ค้ำพระธาตุ เพื่อความเป็นสิริมงคลและปัญญา" },
            { stepNumber: 3, title: "เวียนเทียนรอบพระธาตุ", description: "เดินเวียนรอบพระธาตุ 3 รอบตามเข็มนาฬิกา สวดนะโมและบทสรรเสริญพระรัตนตรัย" },
            { stepNumber: 4, title: "อธิษฐานขอพรด้านปัญญาและการเรียน", description: "ตั้งจิตขอพรด้านสติปัญญา การเรียน ความสำเร็จในการศึกษาและหน้าที่การงาน" }
        ]
    },
    {
        name: "วัดบวรนิเวศวิหาร",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Wat_Bowon_Bangkok.jpg/1280px-Wat_Bowon_Bangkok.jpg",
        description: "วัดบวรนิเวศราชวรวิหาร ตั้งอยู่ที่ถนนพระสุเมรุ เขตพระนคร กรุงเทพฯ เป็นวัดสำคัญระดับชาติ เคยเป็นที่ประทับของสมเด็จพระสังฆราชและพระบรมวงศ์ทรงผนวช รัชกาลที่ 9 ทรงผนวชที่วัดนี้ มีพระพุทธชินสีห์เป็นพระประธานอันศักดิ์สิทธิ์",
        googleMap: "https://maps.google.com/?q=13.7595,100.5017",
        appleMap: "",
        tags: ["ความสำเร็จ", "สุขภาพ"],
        howToPray: "กราบไหว้พระพุทธชินสีห์ จุดธูปเทียน สวดมนต์ตามแบบธรรมยุตนิกาย ขอพรด้านปัญญาและการศึกษา",
        rating: 4.8,
        successRate: 87,
        successCount: 940,
        totalPrayerCount: 1080,
        suitableFor: ["การเรียน", "การงาน"],
        worshipGuide: [
            { stepNumber: 1, title: "แต่งกายสุภาพ", description: "แต่งกายสุภาพ สตรีต้องสวมกระโปรงหรือผ้าถุง ห้ามสวมกางเกงขาสั้นเข้าพระอุโบสถ" },
            { stepNumber: 2, title: "กราบไหว้พระพุทธชินสีห์", description: "กราบไหว้พระพุทธชินสีห์ พระประธานสำคัญ จุดธูปเทียน กราบ 3 ครั้ง" },
            { stepNumber: 3, title: "สวดมนต์ในพระอุโบสถ", description: "นั่งสมาธิและสวดมนต์ในพระอุโบสถ บรรยากาศสงบเหมาะแก่การภาวนา" },
            { stepNumber: 4, title: "อธิษฐานขอพรด้านปัญญา", description: "ตั้งจิตขอพรด้านสติปัญญา การศึกษา ความก้าวหน้าในหน้าที่การงาน" },
            { stepNumber: 5, title: "ฟังธรรมหรือทำบุญ", description: "หากมีเวลา ฟังธรรมจากพระหรือทำบุญถวายสังฆทาน เพื่อบารมีและความเจริญในชีวิต" }
        ]
    }
];

async function seed() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB Connected");

        const result = await Place.insertMany(places);
        console.log(`✅ Inserted ${result.length} places successfully`);

        result.forEach(p => console.log(` - ${p.name} (${p._id})`));

        await mongoose.disconnect();
        process.exit(0);
    } catch (err) {
        console.error("❌ Error:", err.message);
        process.exit(1);
    }
}

seed();
