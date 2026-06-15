// Data file - Idioms database
// Optional image fields for each idiom:
// image: "images/example-file.png",
// imageAlt: "Short description of the image",
// Optional breakdown fields for each idiom:
// breakdown: [
//   { word: "example", englishClass: "noun", english: "English literal meaning", vietnameseClass: "danh từ", vietnamese: "Vietnamese literal meaning" }
// ],
const casesData = [
  {
    title: "Actions speak louder than words",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Hành động có giá trị hơn lời nói",
    tags: ["Life"],
    example: "He promised to study harder, but actions speak louder than words.",
    image: "images/actions-speak-louder-than-words.jpg"
  },
  {
    title: "Add insult to injury",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Thêm dầu vào lửa",
    tags: ["Communication"],
    example: "They lost the match, and to add insult to injury, their best player was injured."
  },
  {
    title: "Back to the drawing board",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Bắt đầu lại từ đầu (vì kế hoạch trước thất bại)",
    tags: ["Work", "Study"],
    example: "The experiment failed, so it's back to the drawing board."
  },
  {
    title: "The ball is in your court",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Bây giờ đến lượt bạn",
    tags: ["Communication", "Work"],
    example: "I've made my offer. Now the ball is in your court.",
    englishMeaning: "it is time for someone to deal with a problem or make a decision, because other people have already done as much as they can",
    story: "Lấy hình ảnh chiếc bóng tennis, thành ngữ này xuất hiện từ thế kỷ 19 và trở nên thông dụng vào những năm 1960 và 1970 trong các cuộc trò chuyện thường ngày hoặc đàm phán kinh doanh.",
    vietnameseEquivalents: ["Tùy"],
    image: "images/ball-in-court.jpg",
  },
  {
    title: "Bite your tongue",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Cố gắng nhịn nói, giữ im lặng",
    tags: ["Communication"],
    example: "I wanted to argue, but I had to bite my tongue.",
    image: "images/bite-your-tongue.jpg"
  },
  {
    title: "Break the ice",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Phá vỡ bầu không khí ngượng ngùng ban đầu",
    tags: ["Communication"],
    example: "He told a joke to break the ice at the meeting.",
    image: "images/break-the-ice.jfif"
  },
  {
    title: "Cross that bridge when you come to it",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Tới đâu hay tới đó, không lo xa",
    tags: ["Life"],
    example: "We might run out of budget, but we'll cross that bridge when we come to it."
  },
  {
    title: "Play devil's advocate",
    difficulty: "difficulty-hard",
    diffText: "Hard",
    desc: "Đóng vai ác (đưa ra ý kiến trái chiều để tranh luận)",
    tags: ["Communication", "IELTS"],
    example: "I agree with you, but let me play devil's advocate for a moment."
  },
  {
    title: "Don't judge a book by its cover",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Đừng đánh giá qua vẻ bề ngoài",
    tags: ["Life"],
    example: "She looks quiet, but she's a great leader. Don't judge a book by its cover."
  },
  {
    title: "Don't put the cart before the horse",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Cầm đèn chạy trước ô tô",
    tags: ["Work"],
    example: "Let's secure the funding first. Don't put the cart before the horse."
  },
  {
    title: "Face the music",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Chấp nhận hậu quả của việc mình làm",
    tags: ["Life"],
    example: "You made a mistake, and now you have to face the music."
  },
  {
    title: "Fit as a fiddle",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Khỏe như vâm",
    tags: ["Health"],
    example: "My grandfather is 80 but he's as fit as a fiddle."
  },
  {
    title: "Get cold feet",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Chùn bước, mất can đảm phút chót",
    tags: ["Emotions"],
    example: "He was going to invest in that stock, but he got cold feet."
  },
  {
    title: "Get your act together",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Chấn chỉnh lại bản thân, làm việc đàng hoàng",
    tags: ["Motivation"],
    example: "You need to get your act together if you want to pass the exam."
  },
  {
    title: "Give the benefit of the doubt",
    difficulty: "difficulty-hard",
    diffText: "Hard",
    desc: "Tạm tin tưởng ai đó vì chưa có bằng chứng họ sai",
    tags: ["Communication"],
    example: "I'll give him the benefit of the doubt and assume his train was late."
  },
  {
    title: "Go back to square one",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Quay lại vạch xuất phát",
    tags: ["Work"],
    example: "If this proposal is rejected, we'll have to go back to square one."
  },
  {
    title: "Go the extra mile",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Làm nhiều hơn những gì được yêu cầu",
    tags: ["Study", "Work"],
    example: "She always goes the extra mile to ensure her research is accurate."
  },
  {
    title: "Hit the sack",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Đi ngủ",
    tags: ["Life"],
    example: "I'm exhausted. I'm going to hit the sack."
  },
  {
    title: "It takes two to tango",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Có lửa mới có khói (cả hai đều có lỗi)",
    tags: ["Communication", "Relationships"],
    example: "Don't just blame him for the argument; it takes two to tango."
  },
  {
    title: "Jump on the bandwagon",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Hùa theo đám đông, chạy theo xu hướng",
    tags: ["Life"],
    example: "Many investors jumped on the bandwagon when tech stocks surged."
  },
  {
    title: "Keep your chin up",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Lạc quan lên, đừng nản chí",
    tags: ["Motivation"],
    example: "Keep your chin up, you'll find a better job soon."
  },
  {
    title: "Leave no stone unturned",
    difficulty: "difficulty-hard",
    diffText: "Hard",
    desc: "Tìm kiếm mọi ngóc ngách, làm mọi cách",
    tags: ["Work", "IELTS"],
    example: "The researchers left no stone unturned in their search for the data."
  },
  {
    title: "Let sleeping dogs lie",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Chuyện cũ bỏ qua, đừng khơi lại rắc rối",
    tags: ["Communication"],
    example: "I didn't ask her about her ex-boyfriend. It's better to let sleeping dogs lie."
  },
  {
    title: "Method to the madness",
    difficulty: "difficulty-hard",
    diffText: "Hard",
    desc: "Sự hỗn loạn có chủ đích",
    tags: ["Personality"],
    example: "His desk looks messy, but there's a method to the madness."
  },
  {
    title: "Off the top of my head",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Nói ngay không cần suy nghĩ/kiểm tra",
    tags: ["Communication"],
    example: "Off the top of my head, I think the meeting is at 3 PM."
  },
  {
    title: "Once in a blue moon",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Năm thì mười họa, rất hiếm khi",
    tags: ["Life"],
    example: "I only eat fast food once in a blue moon.",
    image: "images/once-in-a-blue-moon.jpg"
  },
  {
    title: "Out of the blue",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Bất thình lình, không báo trước",
    tags: ["Life"],
    example: "He called me out of the blue after five years.",
    image: "images/out-of-the-blue.jpg"
  },
  {
    title: "A penny for your thoughts",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Bạn đang nghĩ gì vậy?",
    tags: ["Communication"],
    example: "You look so serious. A penny for your thoughts?"
  },
  {
    title: "Play it by ear",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Tùy cơ ứng biến",
    tags: ["Life"],
    example: "We don't have a fixed itinerary for the trip; we'll just play it by ear."
  },
  {
    title: "Read between the lines",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Hiểu được ẩn ý",
    tags: ["Communication", "IELTS"],
    example: "If you read between the lines, you'll see he's not happy with the plan."
  },
  {
    title: "Rule of thumb",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Nguyên tắc chung (dựa trên kinh nghiệm)",
    tags: ["Study", "Work"],
    example: "As a rule of thumb, one cup of rice needs two cups of water."
  },
  {
    title: "See eye to eye",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Đồng quan điểm",
    tags: ["Communication"],
    example: "My boss and I don't always see eye to eye."
  },
  {
    title: "Steal someone's thunder",
    difficulty: "difficulty-hard",
    diffText: "Hard",
    desc: "Giành hết sự chú ý của ai đó",
    tags: ["Life"],
    example: "She wore a white dress to the wedding and stole the bride's thunder."
  },
  {
    title: "Straight from the horse's mouth",
    difficulty: "difficulty-hard",
    diffText: "Hard",
    desc: "Nghe trực tiếp từ nguồn tin cậy",
    tags: ["Communication"],
    example: "I know it's true because I heard it straight from the horse's mouth."
  },
  {
    title: "Take a rain check",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Hẹn dịp khác nhé",
    tags: ["Communication"],
    example: "I'm busy tonight, can I take a rain check on dinner?",
    image: "images/take-a-rain-check.png"
  },
  {
    title: "The whole nine yards",
    difficulty: "difficulty-hard",
    diffText: "Hard",
    desc: "Toàn bộ, tất tần tật",
    tags: ["Life"],
    example: "He planned the party, bought the food, hired the band—the whole nine yards."
  },
  {
    title: "Throw in the towel",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Bỏ cuộc, nhận thua",
    tags: ["Motivation"],
    example: "The project was too difficult, but she refused to throw in the towel."
  },
  {
    title: "Up in the air",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Chưa chắc chắn, còn bỏ ngỏ",
    tags: ["Work"],
    example: "Our travel plans are still up in the air."
  },
  {
    title: "Water under the bridge",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Chuyện đã qua rồi",
    tags: ["Relationships"],
    example: "We had a fight last year, but it's all water under the bridge now."
  },
  {
    title: "Wear your heart on your sleeve",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Để lộ hết cảm xúc ra ngoài",
    tags: ["Personality"],
    example: "You always know how he feels because he wears his heart on his sleeve."
  },
  {
    title: "A penny saved is a penny earned",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Tiết kiệm cũng như kiếm tiền",
    tags: ["Finance"],
    example: "I decided to cook at home instead of eating out. A penny saved is a penny earned."
  },
  {
    title: "Birds of a feather flock together",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Ngưu tầm ngưu, mã tầm mã",
    tags: ["Life"],
    example: "Those two troublemakers are always together; birds of a feather flock together."
  },
  {
    title: "Catch someone red-handed",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Bắt tại trận",
    tags: ["Life"],
    example: "The police caught the thief red-handed taking the jewelry."
  },
  {
    title: "Come rain or shine",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Dù mưa hay nắng (dù có chuyện gì xảy ra)",
    tags: ["Motivation"],
    example: "I will be there to support you, come rain or shine.",
    image: "images/come-rain-or-shine.jpg"
  },
  {
    title: "Cut somebody some slack",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Không quá khắt khe với ai đó",
    tags: ["Communication"],
    example: "He's new to the team, so cut him some slack if he makes a mistake."
  },
  {
    title: "Easy does it",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Cứ từ từ, cẩn thận",
    tags: ["Life"],
    example: "Easy does it when you move that fragile antique."
  },
  {
    title: "Go down in flames",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Thất bại thảm hại",
    tags: ["Work"],
    example: "The startup company went down in flames after just six months."
  },
  {
    title: "In the heat of the moment",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Trong lúc nóng giận/hành động mất kiểm soát",
    tags: ["Emotions"],
    example: "I said some terrible things in the heat of the moment."
  },
  {
    title: "Keep your eyes peeled",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Mở to mắt mà nhìn, cảnh giác",
    tags: ["Life"],
    example: "Keep your eyes peeled for a parking spot."
  },
  {
    title: "Let the dust settle",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Đợi tình hình dịu lại",
    tags: ["Communication", "Work"],
    example: "We shouldn't make any decisions until we let the dust settle."
  },
  {
    title: "Cost an arm and a leg",
    difficulty: "difficulty-hard",
    diffText: "Hard",
    desc: "Cực kỳ đắt đỏ",
    tags: ["Finance"],
    example: "I'd love to buy a Porsche, but they cost an arm and a leg."
  },
  {
    title: "When pigs fly",
    difficulty: "difficulty-hard",
    diffText: "Hard",
    desc: "Điều không tưởng; việc sẽ không bao giờ xảy ra.",
    tags: ["Humor", "Communication"],
    example: "She'll clean the room when pigs fly – Chẳng bao giờ cô ấy dọn phòng đâu.",
    englishMeaning: "Something that will never happen or is completely impossible.",
    story: "Thành ngữ này xuất hiện từ thế kỷ 16 trong các văn bản cổ ở Scotland dưới dạng một câu châm biếm. Người xưa mượn hình ảnh con lợn – vốn có thân hình nặng nề, cục mịch và hoàn toàn không có khả năng bay – để phóng đại điều vô lý. Khi ai đó hứa hẹn một điều viển vông, người ta sẽ đáp lại: 'Phải, điều đó sẽ xảy ra khi lợn biết bay!' để biểu thị hoài nghi tuyệt đối.",
    vietnameseEquivalents: ["Còn khuya nhé!", "Đừng có mơ!", "Mặt trời mọc đằng Tây"],
    image: "images/when-pigs.fly.png",
    breakdown: [
      { word: "when", englishClass: "adverb/conjunction", english: "at what time; during the time that", vietnameseClass: "trạng từ/liên từ", vietnamese: "khi, khi nào" },
      { word: "pigs", englishClass: "noun", english: "farm animals often raised for pork", vietnameseClass: "danh từ", vietnamese: "những con lợn/heo" },
      { word: "fly", englishClass: "verb", english: "to move through the air", vietnameseClass: "động từ", vietnamese: "bay" }
    ]
  },
  {
    title: "Hit the books",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Bắt đầu học tập chăm chỉ",
    tags: ["IELTS", "Study"],
    example: "I have an exam tomorrow, so I need to hit the books tonight."
  },
  {
    title: "Break a leg",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Chúc may mắn",
    tags: ["Communication"],
    example: "Break a leg in your interview today!"
  },
  {
    title: "Bite the bullet",
    difficulty: "difficulty-hard",
    diffText: "Hard",
    desc: "Cắn răng chịu đựng",
    tags: ["Life"],
    example: "I hate going to the dentist, but I'll just have to bite the bullet."
  },
  {
    title: "Under the weather",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Cảm thấy không khỏe",
    tags: ["Health"],
    example: "I'm feeling a bit under the weather today, so I'll stay home."
  },
  {
    title: "Piece of cake",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Rất dễ dàng",
    tags: ["Communication"],
    example: "The math test was a piece of cake."
  },
  {
    title: "Spill the beans",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Tiết lộ bí mật",
    tags: ["Communication"],
    example: "Come on, spill the beans! What did he say?"
  },
  {
    title: "Beat around the bush",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Vòng vo tam quốc",
    tags: ["Communication"],
    example: "Stop beating around the bush and tell me what the problem is."
  },
  {
    title: "Call it a day",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Kết thúc công việc",
    tags: ["Work"],
    example: "We've been working for hours, let's call it a day."
  },
  {
    title: "Cut corners",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Làm việc qua loa để tiết kiệm",
    tags: ["Work"],
    example: "They cut corners when building the house, and now the roof leaks."
  },
  {
    title: "Get out of hand",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Mất kiểm soát",
    tags: ["Life"],
    example: "The party got out of hand and the police were called."
  },
  {
    title: "Hang in there",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Đừng bỏ cuộc",
    tags: ["Motivation"],
    example: "Hang in there! Things will get better soon."
  },
  {
    title: "Miss the boat",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Bỏ lỡ cơ hội",
    tags: ["Life"],
    example: "If you don't buy the tickets now, you'll miss the boat."
  },
  {
    title: "No pain, no gain",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Không có gì đạt được dễ dàng",
    tags: ["Motivation"],
    example: "My muscles ache from the workout, but no pain, no gain."
  },
  {
    title: "On the ball",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Nhanh nhẹn, hiểu biết",
    tags: ["Work"],
    example: "Our new manager is really on the ball."
  },
  {
    title: "Pull someone's leg",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Trêu đùa ai đó",
    tags: ["Communication"],
    example: "Are you serious, or are you just pulling my leg?"
  },
  {
    title: "So far so good",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Mọi thứ vẫn ổn",
    tags: ["Life"],
    example: "How's your new job? - So far so good."
  },
  {
    title: "Speak of the devil",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Vừa nhắc đã xuất hiện",
    tags: ["Communication"],
    example: "Speak of the devil, here comes John now!"
  },
  {
    title: "Time flies",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Thời gian trôi nhanh",
    tags: ["Life"],
    example: "Time flies when you're having fun."
  },
  {
    title: "To make matters worse",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Làm mọi chuyện tồi tệ hơn",
    tags: ["Life"],
    example: "My car broke down, and to make matters worse, it started raining."
  },
  {
    title: "Wrap one's head around",
    difficulty: "difficulty-hard",
    diffText: "Hard",
    desc: "Cố gắng hiểu điều gì đó phức tạp",
    tags: ["Study"],
    example: "I just can't wrap my head around these new tax laws."
  },
  {
    title: "You can say that again",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Tôi hoàn toàn đồng ý",
    tags: ["Communication"],
    example: "It's freezing outside! - You can say that again!"
  },
  {
    title: "A blessing in disguise",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Trong cái rủi có cái may",
    tags: ["Life"],
    example: "Losing that job turned out to be a blessing in disguise."
  },
  {
    title: "A dime a dozen",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Rất phổ biến, tầm thường",
    tags: ["Life"],
    example: "Those antique toys are a dime a dozen these days."
  },
  {
    title: "Bite off more than you can chew",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Cố làm việc quá sức",
    tags: ["Work"],
    example: "I think I bit off more than I can chew by taking on three projects at once."
  },
  {
    title: "By the skin of your teeth",
    difficulty: "difficulty-hard",
    diffText: "Hard",
    desc: "Vừa vặn, suýt soát",
    tags: ["Life"],
    example: "He passed the exam by the skin of his teeth."
  },
  {
    title: "Don't cry over spilt milk",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Đừng buồn vì những chuyện đã qua",
    tags: ["Motivation"],
    example: "It's a shame you lost the game, but don't cry over spilt milk."
  },
  {
    title: "Every cloud has a silver lining",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Sau cơn mưa trời lại sáng",
    tags: ["Motivation"],
    example: "I know you're upset about the breakup, but every cloud has a silver lining."
  },
  {
    title: "Get a taste of your own medicine",
    difficulty: "difficulty-hard",
    diffText: "Hard",
    desc: "Gậy ông đập lưng ông",
    tags: ["Life"],
    example: "He is always late, so it was nice to see him get a taste of his own medicine when we left without him."
  },
  {
    title: "Give someone the cold shoulder",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Phớt lờ ai đó",
    tags: ["Communication"],
    example: "I tried to say hello, but she gave me the cold shoulder."
  },
  {
    title: "Go on a wild goose chase",
    difficulty: "difficulty-hard",
    diffText: "Hard",
    desc: "Làm việc vô ích",
    tags: ["Life"],
    example: "Looking for that lost ring in the park is like going on a wild goose chase."
  },
  {
    title: "Hit the nail on the head",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Nói trúng phóc",
    tags: ["Communication"],
    example: "You hit the nail on the head with that answer."
  },
  {
    title: "Ignorance is bliss",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Không biết thì không đau lòng",
    tags: ["Life"],
    example: "Sometimes I think ignorance is bliss when it comes to reading the news."
  },
  {
    title: "Let the cat out of the bag",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Vô tình tiết lộ bí mật",
    tags: ["Communication"],
    example: "We were planning a surprise party, but my brother let the cat out of the bag."
  },
  {
    title: "Look before you leap",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Suy nghĩ kỹ trước khi hành động",
    tags: ["Life"],
    example: "You should really look before you leap before investing all your money."
  },
  {
    title: "On the fence",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Phân vân, chưa quyết định",
    tags: ["Life"],
    example: "I'm still on the fence about whether to buy the car or not."
  },
  {
    title: "Put all your eggs in one basket",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Dồn hết rủi ro vào một chỗ",
    tags: ["Finance"],
    example: "Diversify your investments; don't put all your eggs in one basket."
  },
  {
    title: "Take it with a grain of salt",
    difficulty: "difficulty-hard",
    diffText: "Hard",
    desc: "Đừng tin hoàn toàn",
    tags: ["Communication"],
    example: "He exaggerates a lot, so take what he says with a grain of salt."
  },
  {
    title: "The best of both worlds",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Vẹn cả đôi đường",
    tags: ["Life"],
    example: "Working from home offers the best of both worlds."
  },
  {
    title: "The elephant in the room",
    difficulty: "difficulty-hard",
    diffText: "Hard",
    desc: "Vấn đề rõ ràng nhưng ai cũng tránh nói đến",
    tags: ["Communication"],
    example: "His recent demotion was the elephant in the room during the meeting."
  },
  {
    title: "Through thick and thin",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Bất chấp mọi khó khăn",
    tags: ["Relationships"],
    example: "They've been friends through thick and thin for 20 years."
  },
  {
    title: "Throw caution to the wind",
    difficulty: "difficulty-hard",
    diffText: "Hard",
    desc: "Liều lĩnh, không lo hậu quả",
    tags: ["Life"],
    example: "He threw caution to the wind and quit his job to travel."
  },
  {
    title: "To make a long story short",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Tóm lại",
    tags: ["Communication"],
    example: "To make a long story short, we got lost and missed the flight."
  },
  {
    title: "Barking up the wrong tree",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Nhầm lẫn, đoán sai",
    tags: ["Life"],
    example: "If he expects me to lend him more money, he's barking up the wrong tree."
  },
  {
    title: "Burn bridges",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Cắt đứt quan hệ",
    tags: ["Communication"],
    example: "It's important not to burn bridges when you leave a job."
  },
  {
    title: "Cry wolf",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Kêu cứu giả vờ",
    tags: ["Communication"],
    example: "If you cry wolf too often, people will stop believing you."
  },
  {
    title: "Curiosity killed the cat",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Tò tự hại thân",
    tags: ["Life"],
    example: "I shouldn't have read his diary; curiosity killed the cat."
  },
  {
    title: "Cut to the chase",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Vào thẳng vấn đề",
    tags: ["Communication"],
    example: "Let's cut to the chase: how much is this going to cost?"
  },
  {
    title: "Down to earth",
    difficulty: "difficulty-easy",
    diffText: "Easy",
    desc: "Thực tế, không viển vông",
    tags: ["Personality"],
    example: "Despite her fame, she remains very down to earth."
  },
  {
    title: "Draw the line",
    difficulty: "difficulty-medium",
    diffText: "Medium",
    desc: "Đặt ra giới hạn",
    tags: ["Life"],
    example: "I'll help you with your homework, but I draw the line at writing your essay."
  }
];
