// Data file - Idioms database
const casesData = [
  {
    title: "Actions speak louder than words",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Hành động có giá trị hơn lời nói",
    tags: ["Cuộc Sống"],
    example: "He promised to study harder, but actions speak louder than words."
  },
  {
    title: "Add insult to injury",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Thêm dầu vào lửa",
    tags: ["Giao Tiếp"],
    example: "They lost the match, and to add insult to injury, their best player was injured."
  },
  {
    title: "Back to the drawing board",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Bắt đầu lại từ đầu (vì kế hoạch trước thất bại)",
    tags: ["Công Việc", "Học Tập"],
    example: "The experiment failed, so it's back to the drawing board."
  },
  {
    title: "The ball is in your court",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Quyền quyết định thuộc về bạn",
    tags: ["Giao Tiếp", "Công Việc"],
    example: "I've made my offer. Now the ball is in your court."
  },
  {
    title: "Bite your tongue",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Cố gắng nhịn nói, giữ im lặng",
    tags: ["Giao Tiếp"],
    example: "I wanted to argue, but I had to bite my tongue."
  },
  {
    title: "Break the ice",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Phá vỡ bầu không khí ngượng ngùng ban đầu",
    tags: ["Giao Tiếp"],
    example: "He told a joke to break the ice at the meeting."
  },
  {
    title: "Cross that bridge when you come to it",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Tới đâu hay tới đó, không lo xa",
    tags: ["Cuộc Sống"],
    example: "We might run out of budget, but we'll cross that bridge when we come to it."
  },
  {
    title: "Play devil's advocate",
    difficulty: "difficulty-hard",
    diffText: "Khó",
    desc: "Đóng vai ác (đưa ra ý kiến trái chiều để tranh luận)",
    tags: ["Giao Tiếp", "IELTS"],
    example: "I agree with you, but let me play devil's advocate for a moment."
  },
  {
    title: "Don't judge a book by its cover",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Đừng đánh giá qua vẻ bề ngoài",
    tags: ["Cuộc Sống"],
    example: "She looks quiet, but she's a great leader. Don't judge a book by its cover."
  },
  {
    title: "Don't put the cart before the horse",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Cầm đèn chạy trước ô tô",
    tags: ["Công Việc"],
    example: "Let's secure the funding first. Don't put the cart before the horse."
  },
  {
    title: "Face the music",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Chấp nhận hậu quả của việc mình làm",
    tags: ["Cuộc Sống"],
    example: "You made a mistake, and now you have to face the music."
  },
  {
    title: "Fit as a fiddle",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Khỏe như vâm",
    tags: ["Sức Khỏe"],
    example: "My grandfather is 80 but he's as fit as a fiddle."
  },
  {
    title: "Get cold feet",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Chùn bước, mất can đảm phút chót",
    tags: ["Cảm Xúc"],
    example: "He was going to invest in that stock, but he got cold feet."
  },
  {
    title: "Get your act together",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Chấn chỉnh lại bản thân, làm việc đàng hoàng",
    tags: ["Động Lực"],
    example: "You need to get your act together if you want to pass the exam."
  },
  {
    title: "Give the benefit of the doubt",
    difficulty: "difficulty-hard",
    diffText: "Khó",
    desc: "Tạm tin tưởng ai đó vì chưa có bằng chứng họ sai",
    tags: ["Giao Tiếp"],
    example: "I'll give him the benefit of the doubt and assume his train was late."
  },
  {
    title: "Go back to square one",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Quay lại vạch xuất phát",
    tags: ["Công Việc"],
    example: "If this proposal is rejected, we'll have to go back to square one."
  },
  {
    title: "Go the extra mile",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Làm nhiều hơn những gì được yêu cầu",
    tags: ["Học Tập", "Công Việc"],
    example: "She always goes the extra mile to ensure her research is accurate."
  },
  {
    title: "Hit the sack",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Đi ngủ",
    tags: ["Cuộc Sống"],
    example: "I'm exhausted. I'm going to hit the sack."
  },
  {
    title: "It takes two to tango",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Có lửa mới có khói (cả hai đều có lỗi)",
    tags: ["Giao Tiếp", "Tình Cảm"],
    example: "Don't just blame him for the argument; it takes two to tango."
  },
  {
    title: "Jump on the bandwagon",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Hùa theo đám đông, chạy theo xu hướng",
    tags: ["Cuộc Sống"],
    example: "Many investors jumped on the bandwagon when tech stocks surged."
  },
  {
    title: "Keep your chin up",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Lạc quan lên, đừng nản chí",
    tags: ["Động Lực"],
    example: "Keep your chin up, you'll find a better job soon."
  },
  {
    title: "Leave no stone unturned",
    difficulty: "difficulty-hard",
    diffText: "Khó",
    desc: "Tìm kiếm mọi ngóc ngách, làm mọi cách",
    tags: ["Công Việc", "IELTS"],
    example: "The researchers left no stone unturned in their search for the data."
  },
  {
    title: "Let sleeping dogs lie",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Chuyện cũ bỏ qua, đừng khơi lại rắc rối",
    tags: ["Giao Tiếp"],
    example: "I didn't ask her about her ex-boyfriend. It's better to let sleeping dogs lie."
  },
  {
    title: "Method to the madness",
    difficulty: "difficulty-hard",
    diffText: "Khó",
    desc: "Sự hỗn loạn có chủ đích",
    tags: ["Tính Cách"],
    example: "His desk looks messy, but there's a method to the madness."
  },
  {
    title: "Off the top of my head",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Nói ngay không cần suy nghĩ/kiểm tra",
    tags: ["Giao Tiếp"],
    example: "Off the top of my head, I think the meeting is at 3 PM."
  },
  {
    title: "Once in a blue moon",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Năm thì mười họa, rất hiếm khi",
    tags: ["Cuộc Sống"],
    example: "I only eat fast food once in a blue moon."
  },
  {
    title: "Out of the blue",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Bất thình lình, không báo trước",
    tags: ["Cuộc Sống"],
    example: "He called me out of the blue after five years."
  },
  {
    title: "A penny for your thoughts",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Bạn đang nghĩ gì vậy?",
    tags: ["Giao Tiếp"],
    example: "You look so serious. A penny for your thoughts?"
  },
  {
    title: "Play it by ear",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Tùy cơ ứng biến",
    tags: ["Cuộc Sống"],
    example: "We don't have a fixed itinerary for the trip; we'll just play it by ear."
  },
  {
    title: "Read between the lines",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Hiểu được ẩn ý",
    tags: ["Giao Tiếp", "IELTS"],
    example: "If you read between the lines, you'll see he's not happy with the plan."
  },
  {
    title: "Rule of thumb",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Nguyên tắc chung (dựa trên kinh nghiệm)",
    tags: ["Học Tập", "Công Việc"],
    example: "As a rule of thumb, one cup of rice needs two cups of water."
  },
  {
    title: "See eye to eye",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Đồng quan điểm",
    tags: ["Giao Tiếp"],
    example: "My boss and I don't always see eye to eye."
  },
  {
    title: "Steal someone's thunder",
    difficulty: "difficulty-hard",
    diffText: "Khó",
    desc: "Giành hết sự chú ý của ai đó",
    tags: ["Cuộc Sống"],
    example: "She wore a white dress to the wedding and stole the bride's thunder."
  },
  {
    title: "Straight from the horse's mouth",
    difficulty: "difficulty-hard",
    diffText: "Khó",
    desc: "Nghe trực tiếp từ nguồn tin cậy",
    tags: ["Giao Tiếp"],
    example: "I know it's true because I heard it straight from the horse's mouth."
  },
  {
    title: "Take a rain check",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Hẹn dịp khác nhé",
    tags: ["Giao Tiếp"],
    example: "I'm busy tonight, can I take a rain check on dinner?"
  },
  {
    title: "The whole nine yards",
    difficulty: "difficulty-hard",
    diffText: "Khó",
    desc: "Toàn bộ, tất tần tật",
    tags: ["Cuộc Sống"],
    example: "He planned the party, bought the food, hired the band—the whole nine yards."
  },
  {
    title: "Throw in the towel",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Bỏ cuộc, nhận thua",
    tags: ["Động Lực"],
    example: "The project was too difficult, but she refused to throw in the towel."
  },
  {
    title: "Up in the air",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Chưa chắc chắn, còn bỏ ngỏ",
    tags: ["Công Việc"],
    example: "Our travel plans are still up in the air."
  },
  {
    title: "Water under the bridge",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Chuyện đã qua rồi",
    tags: ["Tình Cảm"],
    example: "We had a fight last year, but it's all water under the bridge now."
  },
  {
    title: "Wear your heart on your sleeve",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Để lộ hết cảm xúc ra ngoài",
    tags: ["Tính Cách"],
    example: "You always know how he feels because he wears his heart on his sleeve."
  },
  {
    title: "A penny saved is a penny earned",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Tiết kiệm cũng như kiếm tiền",
    tags: ["Tài Chính"],
    example: "I decided to cook at home instead of eating out. A penny saved is a penny earned."
  },
  {
    title: "Birds of a feather flock together",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Ngưu tầm ngưu, mã tầm mã",
    tags: ["Cuộc Sống"],
    example: "Those two troublemakers are always together; birds of a feather flock together."
  },
  {
    title: "Catch someone red-handed",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Bắt tại trận",
    tags: ["Cuộc Sống"],
    example: "The police caught the thief red-handed taking the jewelry."
  },
  {
    title: "Come rain or shine",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Dù mưa hay nắng (dù có chuyện gì xảy ra)",
    tags: ["Động Lực"],
    example: "I will be there to support you, come rain or shine."
  },
  {
    title: "Cut somebody some slack",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Không quá khắt khe với ai đó",
    tags: ["Giao Tiếp"],
    example: "He's new to the team, so cut him some slack if he makes a mistake."
  },
  {
    title: "Easy does it",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Cứ từ từ, cẩn thận",
    tags: ["Cuộc Sống"],
    example: "Easy does it when you move that fragile antique."
  },
  {
    title: "Go down in flames",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Thất bại thảm hại",
    tags: ["Công Việc"],
    example: "The startup company went down in flames after just six months."
  },
  {
    title: "In the heat of the moment",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Trong lúc nóng giận/hành động mất kiểm soát",
    tags: ["Cảm Xúc"],
    example: "I said some terrible things in the heat of the moment."
  },
  {
    title: "Keep your eyes peeled",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Mở to mắt mà nhìn, cảnh giác",
    tags: ["Cuộc Sống"],
    example: "Keep your eyes peeled for a parking spot."
  },
  {
    title: "Let the dust settle",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Đợi tình hình dịu lại",
    tags: ["Giao Tiếp", "Công Việc"],
    example: "We shouldn't make any decisions until we let the dust settle."
  },
  {
    title: "Cost an arm and a leg",
    difficulty: "difficulty-hard",
    diffText: "Khó",
    desc: "Cực kỳ đắt đỏ",
    tags: ["Tài Chính"],
    example: "I'd love to buy a Porsche, but they cost an arm and a leg."
  },
  {
    title: "When pigs fly",
    difficulty: "difficulty-hard",
    diffText: "Khó",
    desc: "Điều không tưởng; việc sẽ không bao giờ xảy ra.",
    tags: ["Hài Hước", "Giao Tiếp"],
    example: "She'll clean the room when pigs fly – tức là chuyện đó không bao giờ xảy ra.",
    englishMeaning: "Something that will never happen or is completely impossible.",
    story: "Thành ngữ này xuất hiện để diễn tả một điều vô lý bằng hình ảnh một con lợn biết bay, điều mà ai cũng biết là không thể.",
    vietnameseEquivalents: ["Còn khuya nhé!", "Đừng có mơ!", "Mặt trời mọc đằng Tây"],
    breakdown: [
      { word: "when", definition: "(adv): khi nào, vào lúc nào" },
      { word: "pigs", definition: "(noun): những chú lợn, loài vật nặng nề và không thể bay" },
      { word: "fly", definition: "(verb): bay lên bầu trời" }
    ]
  },
  {
    title: "Hit the books",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Bắt đầu học tập chăm chỉ",
    tags: ["IELTS", "Học Tập"],
    example: "I have an exam tomorrow, so I need to hit the books tonight."
  },
  {
    title: "Break a leg",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Chúc may mắn",
    tags: ["Giao Tiếp"],
    example: "Break a leg in your interview today!"
  },
  {
    title: "Bite the bullet",
    difficulty: "difficulty-hard",
    diffText: "Khó",
    desc: "Cắn răng chịu đựng",
    tags: ["Cuộc Sống"],
    example: "I hate going to the dentist, but I'll just have to bite the bullet."
  },
  {
    title: "Under the weather",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Cảm thấy không khỏe",
    tags: ["Sức Khỏe"],
    example: "I'm feeling a bit under the weather today, so I'll stay home."
  },
  {
    title: "Piece of cake",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Rất dễ dàng",
    tags: ["Giao Tiếp"],
    example: "The math test was a piece of cake."
  },
  {
    title: "Spill the beans",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Tiết lộ bí mật",
    tags: ["Giao Tiếp"],
    example: "Come on, spill the beans! What did he say?"
  },
  {
    title: "Beat around the bush",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Vòng vo tam quốc",
    tags: ["Giao Tiếp"],
    example: "Stop beating around the bush and tell me what the problem is."
  },
  {
    title: "Call it a day",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Kết thúc công việc",
    tags: ["Công Việc"],
    example: "We've been working for hours, let's call it a day."
  },
  {
    title: "Cut corners",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Làm việc qua loa để tiết kiệm",
    tags: ["Công Việc"],
    example: "They cut corners when building the house, and now the roof leaks."
  },
  {
    title: "Get out of hand",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Mất kiểm soát",
    tags: ["Cuộc Sống"],
    example: "The party got out of hand and the police were called."
  },
  {
    title: "Hang in there",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Đừng bỏ cuộc",
    tags: ["Động Lực"],
    example: "Hang in there! Things will get better soon."
  },
  {
    title: "Miss the boat",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Bỏ lỡ cơ hội",
    tags: ["Cuộc Sống"],
    example: "If you don't buy the tickets now, you'll miss the boat."
  },
  {
    title: "No pain, no gain",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Không có gì đạt được dễ dàng",
    tags: ["Động Lực"],
    example: "My muscles ache from the workout, but no pain, no gain."
  },
  {
    title: "On the ball",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Nhanh nhẹn, hiểu biết",
    tags: ["Công Việc"],
    example: "Our new manager is really on the ball."
  },
  {
    title: "Pull someone's leg",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Trêu đùa ai đó",
    tags: ["Giao Tiếp"],
    example: "Are you serious, or are you just pulling my leg?"
  },
  {
    title: "So far so good",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Mọi thứ vẫn ổn",
    tags: ["Cuộc Sống"],
    example: "How's your new job? - So far so good."
  },
  {
    title: "Speak of the devil",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Vừa nhắc đã xuất hiện",
    tags: ["Giao Tiếp"],
    example: "Speak of the devil, here comes John now!"
  },
  {
    title: "Time flies",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Thời gian trôi nhanh",
    tags: ["Cuộc Sống"],
    example: "Time flies when you're having fun."
  },
  {
    title: "To make matters worse",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Làm mọi chuyện tồi tệ hơn",
    tags: ["Cuộc Sống"],
    example: "My car broke down, and to make matters worse, it started raining."
  },
  {
    title: "Wrap one's head around",
    difficulty: "difficulty-hard",
    diffText: "Khó",
    desc: "Cố gắng hiểu điều gì đó phức tạp",
    tags: ["Học Tập"],
    example: "I just can't wrap my head around these new tax laws."
  },
  {
    title: "You can say that again",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Tôi hoàn toàn đồng ý",
    tags: ["Giao Tiếp"],
    example: "It's freezing outside! - You can say that again!"
  },
  {
    title: "A blessing in disguise",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Trong cái rủi có cái may",
    tags: ["Cuộc Sống"],
    example: "Losing that job turned out to be a blessing in disguise."
  },
  {
    title: "A dime a dozen",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Rất phổ biến, tầm thường",
    tags: ["Cuộc Sống"],
    example: "Those antique toys are a dime a dozen these days."
  },
  {
    title: "Bite off more than you can chew",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Cố làm việc quá sức",
    tags: ["Công Việc"],
    example: "I think I bit off more than I can chew by taking on three projects at once."
  },
  {
    title: "By the skin of your teeth",
    difficulty: "difficulty-hard",
    diffText: "Khó",
    desc: "Vừa vặn, suýt soát",
    tags: ["Cuộc Sống"],
    example: "He passed the exam by the skin of his teeth."
  },
  {
    title: "Don't cry over spilt milk",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Đừng buồn vì những chuyện đã qua",
    tags: ["Động Lực"],
    example: "It's a shame you lost the game, but don't cry over spilt milk."
  },
  {
    title: "Every cloud has a silver lining",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Sau cơn mưa trời lại sáng",
    tags: ["Động Lực"],
    example: "I know you're upset about the breakup, but every cloud has a silver lining."
  },
  {
    title: "Get a taste of your own medicine",
    difficulty: "difficulty-hard",
    diffText: "Khó",
    desc: "Gậy ông đập lưng ông",
    tags: ["Cuộc Sống"],
    example: "He is always late, so it was nice to see him get a taste of his own medicine when we left without him."
  },
  {
    title: "Give someone the cold shoulder",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Phớt lờ ai đó",
    tags: ["Giao Tiếp"],
    example: "I tried to say hello, but she gave me the cold shoulder."
  },
  {
    title: "Go on a wild goose chase",
    difficulty: "difficulty-hard",
    diffText: "Khó",
    desc: "Làm việc vô ích",
    tags: ["Cuộc Sống"],
    example: "Looking for that lost ring in the park is like going on a wild goose chase."
  },
  {
    title: "Hit the nail on the head",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Nói trúng phóc",
    tags: ["Giao Tiếp"],
    example: "You hit the nail on the head with that answer."
  },
  {
    title: "Ignorance is bliss",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Không biết thì không đau lòng",
    tags: ["Cuộc Sống"],
    example: "Sometimes I think ignorance is bliss when it comes to reading the news."
  },
  {
    title: "Let the cat out of the bag",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Vô tình tiết lộ bí mật",
    tags: ["Giao Tiếp"],
    example: "We were planning a surprise party, but my brother let the cat out of the bag."
  },
  {
    title: "Look before you leap",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Suy nghĩ kỹ trước khi hành động",
    tags: ["Cuộc Sống"],
    example: "You should really look before you leap before investing all your money."
  },
  {
    title: "On the fence",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Phân vân, chưa quyết định",
    tags: ["Cuộc Sống"],
    example: "I'm still on the fence about whether to buy the car or not."
  },
  {
    title: "Put all your eggs in one basket",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Dồn hết rủi ro vào một chỗ",
    tags: ["Tài Chính"],
    example: "Diversify your investments; don't put all your eggs in one basket."
  },
  {
    title: "Take it with a grain of salt",
    difficulty: "difficulty-hard",
    diffText: "Khó",
    desc: "Đừng tin hoàn toàn",
    tags: ["Giao Tiếp"],
    example: "He exaggerates a lot, so take what he says with a grain of salt."
  },
  {
    title: "The best of both worlds",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Vẹn cả đôi đường",
    tags: ["Cuộc Sống"],
    example: "Working from home offers the best of both worlds."
  },
  {
    title: "The elephant in the room",
    difficulty: "difficulty-hard",
    diffText: "Khó",
    desc: "Vấn đề rõ ràng nhưng ai cũng tránh nói đến",
    tags: ["Giao Tiếp"],
    example: "His recent demotion was the elephant in the room during the meeting."
  },
  {
    title: "Through thick and thin",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Bất chấp mọi khó khăn",
    tags: ["Tình Cảm"],
    example: "They've been friends through thick and thin for 20 years."
  },
  {
    title: "Throw caution to the wind",
    difficulty: "difficulty-hard",
    diffText: "Khó",
    desc: "Liều lĩnh, không lo hậu quả",
    tags: ["Cuộc Sống"],
    example: "He threw caution to the wind and quit his job to travel."
  },
  {
    title: "To make a long story short",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Tóm lại",
    tags: ["Giao Tiếp"],
    example: "To make a long story short, we got lost and missed the flight."
  },
  {
    title: "Barking up the wrong tree",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Nhầm lẫn, đoán sai",
    tags: ["Cuộc Sống"],
    example: "If he expects me to lend him more money, he's barking up the wrong tree."
  },
  {
    title: "Burn bridges",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Cắt đứt quan hệ",
    tags: ["Giao Tiếp"],
    example: "It's important not to burn bridges when you leave a job."
  },
  {
    title: "Cry wolf",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Kêu cứu giả vờ",
    tags: ["Giao Tiếp"],
    example: "If you cry wolf too often, people will stop believing you."
  },
  {
    title: "Curiosity killed the cat",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Tò tự hại thân",
    tags: ["Cuộc Sống"],
    example: "I shouldn't have read his diary; curiosity killed the cat."
  },
  {
    title: "Cut to the chase",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Vào thẳng vấn đề",
    tags: ["Giao Tiếp"],
    example: "Let's cut to the chase: how much is this going to cost?"
  },
  {
    title: "Down to earth",
    difficulty: "difficulty-easy",
    diffText: "Dễ",
    desc: "Thực tế, không viển vông",
    tags: ["Tính Cách"],
    example: "Despite her fame, she remains very down to earth."
  },
  {
    title: "Draw the line",
    difficulty: "difficulty-medium",
    diffText: "Trung Bình",
    desc: "Đặt ra giới hạn",
    tags: ["Cuộc Sống"],
    example: "I'll help you with your homework, but I draw the line at writing your essay."
  }
];