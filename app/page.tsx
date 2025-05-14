import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Calendar,
  MessageCircle,
  ArrowRight,
  Building,
  Heart,
  BookOpen,
  Award,
  Briefcase,
  Code,
  Headphones,
  Shield,
  Sparkles,
  Target,
  Instagram,
} from "lucide-react"
import "./custom-buttons.css"

export default function AlumniRecruitment() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-red-50/30">
      {/* ナビゲーションバー */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="https://www.funclock.co.jp/" target="_blank" rel="noopener noreferrer">
              <div className="h-10">
                <Image src="/funclock-logo.jpeg" alt="FunClock" width={160} height={40} className="h-full w-auto" />
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-red-600 transition-colors">
              アムルナイ採用とは
            </Link>
            <Link href="#stories" className="text-sm font-medium hover:text-red-600 transition-colors">
              再入社した方々の声
            </Link>
            <Link href="#company" className="text-sm font-medium hover:text-red-600 transition-colors">
              会社の今
            </Link>
            <Link href="#business" className="text-sm font-medium hover:text-red-600 transition-colors">
              事業領域
            </Link>
            <Link href="#letter" className="text-sm font-medium hover:text-red-600 transition-colors">
              あなたへのレター
            </Link>
          </nav>
          <div>
            <Link
              href="https://s.lmes.jp/landing-qr/2007043693-47Wd0Wl8?uLand=r7Pjwb"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-button custom-button-primary"
            >
              カジュアル面談に申し込む
              <ArrowRight className="ml-2 h-4 w-4 inline-block" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero セクション */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-red-50 to-transparent"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-200 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-300 rounded-full filter blur-3xl opacity-20"></div>

          <div className="container relative z-10">
            <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-flex items-center rounded-full border border-red-200 bg-white px-3 py-1 text-sm shadow-sm">
                  <span className="text-red-600 font-medium flex items-center">
                    <Sparkles className="h-3.5 w-3.5 mr-1 text-red-500" />
                    アムルナイ採用プログラム
                  </span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl mb-8 relative pb-4">
                  <span className="text-red-600 inline-block">ここで、また出会えたら</span>
                  <span className="absolute bottom-0 left-0 w-24 h-1 bg-red-600"></span>
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  あのときご縁がなかったあなたへ。今、FunClockはもう一度会いたいと思っています。
                  IT人材の育成に力を入れる私たちと、あなたの新たな可能性を一緒に探しませんか？
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <Link
                    href="https://s.lmes.jp/landing-qr/2007043693-47Wd0Wl8?uLand=r7Pjwb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-button custom-button-primary"
                  >
                    カジュアル面談を予約する
                    <ArrowRight className="ml-2 h-4 w-4 inline-block" />
                  </Link>
                  <button className="custom-button custom-button-outline">話を聞いてみる</button>
                </div>
              </div>
              <div className="relative mx-auto aspect-square w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-red-400/20 rounded-2xl transform rotate-6 scale-105"></div>
                <div className="relative overflow-hidden rounded-2xl border-8 border-white shadow-2xl transform -rotate-3">
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent z-10"></div>
                  <Image
                    src="/team-photo.jpeg"
                    alt="FunClockのチームメンバー"
                    width={500}
                    height={500}
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-red-500 to-red-400 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                  <span className="text-white font-bold text-lg">Join Us!</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* アムルナイ採用とは */}
        <section id="about" className="py-20 md:py-32 relative">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-100 rounded-full filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4 px-3 py-1 bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                Our Vision
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 relative pb-4 inline-block">
                別れた道が、
                <span className="text-red-600">再び交わるとき。</span>
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-red-600"></span>
              </h2>
              <p className="mt-4 text-gray-600 md:text-xl">
                違う道を選んだことは、あなたの人生にとってベストな選択だったと私たちは思います。
                でも、あなたのような方と再び働けるチャンスを大切にしたい。 そんな想いから、アムルナイ採用を始めました。
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <Card className="border-red-100 bg-white/80 backdrop-blur-sm transition-all hover:shadow-xl hover:-translate-y-1 duration-300 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-red-50 shadow-md">
                    <Heart className="h-7 w-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">選択を尊重します</h3>
                  <p className="text-gray-600">
                    違う道を選ぶことは決して悪いことではありません。あなたにとって最善の選択だったはずです。
                    私たちはその選択を尊重した上で、今だからこそ生まれる新たな可能性を探したいと考えています。
                    人生は様々な選択の連続。今、また新しい選択肢として私たちがあなたの選択肢になれたら嬉しいです。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-100 bg-white/80 backdrop-blur-sm transition-all hover:shadow-xl hover:-translate-y-1 duration-300 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-red-50 shadow-md">
                    <Building className="h-7 w-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">会社は進化しています</h3>
                  <p className="text-gray-600">
                    FunClockは、あなたが内定をいただいた時から大きく変わりました。
                    従業員数は320名に成長し、教育プログラムの拡充、新規プロジェクトの増加など、
                    働く環境も、キャリアの可能性も広がっています。
                    あの時とは違う環境で、あなたの才能を発揮できる場所が広がっています。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-100 bg-white/80 backdrop-blur-sm transition-all hover:shadow-xl hover:-translate-y-1 duration-300 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-red-50 shadow-md">
                    <Users className="h-7 w-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">相互理解があります</h3>
                  <p className="text-gray-600">
                    一度選考プロセスを経験した方とは、お互いをよく知っています。
                    だからこそ、より深い相互理解からスタートできます。
                    あなたの強みや価値観を知った上で、最適なポジションや働き方を一緒に考えることができるのです。
                    ゼロからではなく、すでにある関係性から始められることが強みです。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 再入社した方々の声 */}
        <section id="stories" className="py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-50/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-red-100 rounded-full filter blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4 px-3 py-1 bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                Success Stories
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="text-red-600">再入社</span>
                した方々の声
              </h2>
              <p className="mt-4 text-gray-600 md:text-xl">一度は別の道を選んだ方々が、なぜFunClockに戻ってきたのか</p>
            </div>

            <div className="mt-16">
              <Tabs defaultValue="story1" className="w-full">
                <TabsList className="mx-auto grid w-full max-w-md grid-cols-2 p-1 bg-red-50 rounded-full">
                  <TabsTrigger
                    value="story1"
                    className="rounded-full data-[state=active]:bg-white data-[state=active]:text-red-600 data-[state=active]:shadow-md transition-all duration-200"
                  >
                    KHさん
                  </TabsTrigger>
                  <TabsTrigger
                    value="story2"
                    className="rounded-full data-[state=active]:bg-white data-[state=active]:text-red-600 data-[state=active]:shadow-md transition-all duration-200"
                  >
                    KSさん
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="story1" className="mt-8">
                  <div className="grid gap-8 md:grid-cols-2 items-center">
                    <div className="flex justify-center">
                      <div className="relative w-96 h-96">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-red-400/20 rounded-2xl transform rotate-3 scale-105"></div>
                        <div className="relative overflow-hidden rounded-2xl border-8 border-white shadow-2xl transform -rotate-2 w-full h-full">
                          <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent z-10"></div>
                          <Image
                            src="/person-kh-new.png"
                            alt="KHさんの写真"
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-2 shadow-lg">
                          <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-full p-2">
                            <Shield className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                          テストエンジニア
                        </Badge>
                        <Badge variant="outline" className="text-gray-500">
                          2年前に再入社
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold">KHさん（28歳）</h3>
                      <div className="space-y-4">
                        <div className="rounded-xl bg-white p-5 shadow-md border border-red-50">
                          <h4 className="font-medium text-gray-900 flex items-center mb-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 mr-2">
                              <span className="text-red-600 text-xs">01</span>
                            </span>
                            辞退した理由
                          </h4>
                          <p className="text-gray-600 italic">
                            "当時は大手企業の安定性に惹かれて内定を辞退しました。IT未経験だったので、大きな会社の方が安心だと思ったんです。"
                          </p>
                        </div>
                        <div className="rounded-xl bg-white p-5 shadow-md border border-red-50">
                          <h4 className="font-medium text-gray-900 flex items-center mb-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 mr-2">
                              <span className="text-red-600 text-xs">02</span>
                            </span>
                            戻ってきた理由
                          </h4>
                          <p className="text-gray-600 italic">
                            "大手企業では自分のペースで成長できず、もっと実践的なスキルを身につけたいと思っていました。FunClockの教育プログラムが充実していると聞き、思い切って連絡してみたんです。"
                          </p>
                        </div>
                        <div className="rounded-xl bg-white p-5 shadow-md border border-red-50">
                          <h4 className="font-medium text-gray-900 flex items-center mb-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 mr-2">
                              <span className="text-red-600 text-xs">03</span>
                            </span>
                            今の仕事
                          </h4>
                          <p className="text-gray-600 italic">
                            "今はテストエンジニアとして活躍しています。未経験からのスタートでしたが、手厚い研修とJSTQB資格取得支援のおかげで、専門性を身につけることができました。品質管理の重要性を実感しながら、日々やりがいを感じています。"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="story2" className="mt-8">
                  <div className="grid gap-8 md:grid-cols-2 items-center">
                    <div className="flex justify-center">
                      <div className="relative w-96 h-96">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-red-400/20 rounded-2xl transform rotate-3 scale-105"></div>
                        <div className="relative overflow-hidden rounded-2xl border-8 border-white shadow-2xl transform -rotate-2 w-full h-full">
                          <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent z-10"></div>
                          <Image src="/person-ks.png" alt="KSさんの写真" fill className="object-cover object-center" />
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-2 shadow-lg">
                          <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-full p-2">
                            <Target className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                          プロジェクトマネージャー
                        </Badge>
                        <Badge variant="outline" className="text-gray-500">
                          1年前に再入社
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold">KSさん（26歳）</h3>
                      <div className="space-y-4">
                        <div className="rounded-xl bg-white p-5 shadow-md border border-red-50">
                          <h4 className="font-medium text-gray-900 flex items-center mb-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 mr-2">
                              <span className="text-red-600 text-xs">01</span>
                            </span>
                            辞退した理由
                          </h4>
                          <p className="text-gray-600 italic">
                            "内定をいただいた時は、まだ海外で働きたいという夢があり辞退しました。グローバルな環境で経験を積みたかったんです。"
                          </p>
                        </div>
                        <div className="rounded-xl bg-white p-5 shadow-md border border-red-50">
                          <h4 className="font-medium text-gray-900 flex items-center mb-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 mr-2">
                              <span className="text-red-600 text-xs">02</span>
                            </span>
                            戻ってきた理由
                          </h4>
                          <p className="text-gray-600 italic">
                            "前職では小規模なチームのリーダーを任されていました。FunClockのSNSを見て組織の成長に驚き、連絡してみると、マネジメント経験を活かせるポジションがあると言われ、興味を持ちました。"
                          </p>
                        </div>
                        <div className="rounded-xl bg-white p-5 shadow-md border border-red-50">
                          <h4 className="font-medium text-gray-900 flex items-center mb-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 mr-2">
                              <span className="text-red-600 text-xs">03</span>
                            </span>
                            今の仕事
                          </h4>
                          <p className="text-gray-600 italic">
                            "現在は評価・検証部門のプロジェクトマネージャーとして活躍しています。海外経験を活かしながら、チームをリードする役割にやりがいを感じています。FunClockは私の経験を最大限に活かせる場所を用意してくれました。"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* FunClockの"今"とこれから */}
        <section id="company" className="py-20 md:py-32 relative">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-100 rounded-full filter blur-3xl opacity-20 transform translate-x-1/4 -translate-y-1/4"></div>

          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4 px-3 py-1 bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                Our Growth
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="text-red-600">あのとき</span>
                と、今は違う。
              </h2>
              <p className="mt-4 text-gray-600 md:text-xl">あなたが知っているFunClockから、私たちはこう変わりました</p>
            </div>

            <div className="mt-16">
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-md border border-red-50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden">
                  <div className="flex">
                    <div className="w-1/4 bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center p-6">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-red-200 rounded-full opacity-30 animate-pulse"></div>
                        <Building className="h-16 w-16 text-red-600" />
                      </div>
                    </div>
                    <div className="p-6 w-3/4">
                      <h3 className="text-xl font-bold mb-3">組織の成長と新規プロジェクト</h3>
                      <p className="text-gray-600">
                        2018年の設立以来、社員数は320名（契約社員・テスターアルバイト含む）に成長。
                        六本木のオフィス環境も改善し、より創造的な空間で働けるようになりました。
                        新規プロジェクトが増加し、様々な業界・分野での経験を積める機会が広がっています。
                        チャレンジングな案件に挑戦できる環境が整っています。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-red-50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden">
                  <div className="flex">
                    <div className="w-1/4 bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center p-6">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-red-200 rounded-full opacity-30 animate-pulse"></div>
                        <BookOpen className="h-16 w-16 text-red-600" />
                      </div>
                    </div>
                    <div className="p-6 w-3/4">
                      <h3 className="text-xl font-bold mb-3">教育体制の進化</h3>
                      <p className="text-gray-600">
                        IT未経験者向けの教育プログラムを大幅に拡充。オンライン研修システムの導入、メンター制度の強化、
                        外部講師を招いたワークショップなど、あなたの成長をサポートする体制が整っています。
                        平均年齢26歳の若い組織で、95%が業界未経験からのスタートという環境だからこそ、学び合う文化が根付いています。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-red-50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden">
                  <div className="flex">
                    <div className="w-1/4 bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center p-6">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-red-200 rounded-full opacity-30 animate-pulse"></div>
                        <Award className="h-16 w-16 text-red-600" />
                      </div>
                    </div>
                    <div className="p-6 w-3/4">
                      <h3 className="text-xl font-bold mb-3">資格取得支援の充実</h3>
                      <p className="text-gray-600">
                        IT関連の資格取得を全面的にサポート。特にJSTQB資格の取得に力を入れており、多数の有資格者が在籍。
                        受験料の全額補助、合格時のインセンティブ、学習時間の業務時間内確保など、
                        あなたのスキルアップを会社全体でバックアップします。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-red-50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden">
                  <div className="flex">
                    <div className="w-1/4 bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center p-6">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-red-200 rounded-full opacity-30 animate-pulse"></div>
                        <Calendar className="h-16 w-16 text-red-600" />
                      </div>
                    </div>
                    <div className="p-6 w-3/4">
                      <h3 className="text-xl font-bold mb-3">キャリアパスの明確化</h3>
                      <p className="text-gray-600">
                        エンジニア、マネージャー、スペシャリストなど、多様なキャリアパスを用意。
                        半年ごとのキャリア面談で、あなたの希望に沿ったキャリア形成をサポートします。
                        自分らしく成長できる道筋が、ここにはあります。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 事業領域と特徴 */}
        <section id="business" className="py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-50/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-red-100 rounded-full filter blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4 px-3 py-1 bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                Our Business
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="text-red-600">事業領域</span>と<span className="text-red-600">特徴</span>
              </h2>
              <p className="mt-4 text-gray-600 md:text-xl">
                FunClockは4つの柱を中心に事業を展開し、特に評価・検証分野に強みを持っています
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-red-100 bg-white/80 backdrop-blur-sm transition-all hover:shadow-xl hover:-translate-y-1 duration-300 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500 to-red-400 transform translate-x-10 -translate-y-10 rotate-45"></div>
                <CardContent className="p-6 relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-red-50 shadow-md">
                    <Shield className="h-7 w-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">評価・検証</h3>
                  <p className="text-gray-600">
                    ソフトウェアのテスト・評価エンジニアリングを提供。第三者の視点から品質を検証し、
                    高品質なシステム構築をサポートします。JSTQB資格保有者も多数在籍し、
                    専門性の高いテスト設計・実行を実現しています。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-100 bg-white/80 backdrop-blur-sm transition-all hover:shadow-xl hover:-translate-y-1 duration-300 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500 to-red-400 transform translate-x-10 -translate-y-10 rotate-45"></div>
                <CardContent className="p-6 relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-red-50 shadow-md">
                    <Code className="h-7 w-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">開発</h3>
                  <p className="text-gray-600">
                    システム開発・設計、開発プロセスの標準化・自動化、ソースコード分析・品質向上、
                    PMO・PMO補佐などのサービスを提供。品質を重視した開発アプローチで、
                    安定したシステム構築を実現します。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-100 bg-white/80 backdrop-blur-sm transition-all hover:shadow-xl hover:-translate-y-1 duration-300 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500 to-red-400 transform translate-x-10 -translate-y-10 rotate-45"></div>
                <CardContent className="p-6 relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-red-50 shadow-md">
                    <Briefcase className="h-7 w-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">運用・保守</h3>
                  <p className="text-gray-600">
                    システムの監視やメンテナンスを通じた運用サポートを提供。
                    安定したシステム運用を実現し、トラブル発生時の迅速な対応で ビジネスの継続性を確保します。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-100 bg-white/80 backdrop-blur-sm transition-all hover:shadow-xl hover:-translate-y-1 duration-300 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500 to-red-400 transform translate-x-10 -translate-y-10 rotate-45"></div>
                <CardContent className="p-6 relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-red-50 shadow-md">
                    <Headphones className="h-7 w-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">サポート</h3>
                  <p className="text-gray-600">
                    ヘルプデスク業務などのサポート業務を提供。 ユーザーからの問い合わせに丁寧に対応し、
                    システムの利用をサポートします。
                    技術的な知識と高いコミュニケーション能力を活かしたサービスを展開しています。
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 mx-auto max-w-3xl">
              <div className="rounded-xl bg-white p-8 shadow-lg border border-red-50">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-red-500" />
                  社風・人材育成の特徴
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex flex-col items-center p-6 bg-gradient-to-br from-red-50 to-red-100/50 rounded-xl shadow-md">
                    <span className="text-3xl font-bold text-red-600 mb-1">26歳</span>
                    <span className="text-sm text-gray-600">平均年齢</span>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-gradient-to-br from-red-50 to-red-100/50 rounded-xl shadow-md">
                    <span className="text-3xl font-bold text-red-600 mb-1">95%</span>
                    <span className="text-sm text-gray-600">業界未経験者の割合</span>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-gradient-to-br from-red-50 to-red-100/50 rounded-xl shadow-md">
                    <span className="text-3xl font-bold text-red-600 mb-1">70%</span>
                    <span className="text-sm text-gray-600">レクリエーション参加率</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  FunClockは、未経験者を積極的に採用し、充実した研修制度と資格取得支援を通じてエンジニアとしての成長をサポートしています。
                  社内はアットホームな雰囲気で、社員同士の距離が近く、毎月のレクリエーションなども活発に行われています。
                  若い組織だからこそ、新しいアイデアを取り入れやすく、挑戦を応援する文化があります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* あなたへ贈るパーソナルレター */}
        <section id="letter" className="py-20 md:py-32 relative">
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-200 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-300 rounded-full filter blur-3xl opacity-20"></div>

          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-2xl bg-white p-8 shadow-xl md:p-12 border border-red-100">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-red-600">FunClockを受けてくれたあなたへ</h3>
                </div>

                <h2 className="mb-8 text-2xl font-bold md:text-4xl relative pb-4 inline-block">
                  あなたを、
                  <span className="text-red-600">ちゃんと覚えています</span>
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-red-600"></span>
                </h2>

                <div className="prose prose-red max-w-none">
                  <p>あの日、あなたとお会いしたことを、私たちは覚えています。</p>
                  <p>
                    選考を通じて感じたあなたの熱意や才能、そして私たちとの会話。
                    当時は様々な理由で別の道を選ばれたかもしれませんが、それは決して間違った選択ではなかったと思います。
                    人生の選択に「正解」はなく、その時々の最善があるだけですから。
                  </p>
                  <p>
                    2018年の創業以来、私たちFunClockは大きく変わりました。
                    教育プログラムは充実し、働く環境も整い、何よりIT人材の育成という私たちのミッションがより明確になりました。
                    そして、あなたのような才能ある方々と再び出会いたいという思いが強くなりました。
                  </p>
                  <p>
                    もしかしたら、あなたも変わったかもしれません。
                    新たな経験を積み、視野が広がり、価値観が変化したかもしれません。
                    だからこそ、もう一度お互いを知る機会を持ちたいのです。
                  </p>
                  <p>
                    この手紙を読んで、少しでも興味を持っていただけたなら、 ぜひカジュアルな形でお話しませんか？
                    プレッシャーは一切ありません。ただ、コーヒーでも飲みながら、
                    お互いの「今」について語り合えたら嬉しいです。
                  </p>
                  <p>あなたとの再会を、心より楽しみにしています。</p>
                  <div className="mt-6 text-right">
                    <span className="inline-block font-semibold text-lg text-red-600">三井 友也</span>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <Link
                    href="https://s.lmes.jp/landing-qr/2007043693-47Wd0Wl8?uLand=r7Pjwb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-button custom-button-primary text-lg px-8 py-6"
                  >
                    カジュアル面談に申し込む
                    <MessageCircle className="ml-2 h-5 w-5 inline-block" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA セクション */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-red-50/50 to-red-100/30"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-200 rounded-full filter blur-3xl opacity-20"></div>

          <div className="container relative z-10">
            <div className="rounded-2xl bg-gradient-to-r from-red-600 to-red-500 p-8 md:p-12 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

              <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center relative">
                <div>
                  <h2 className="text-2xl font-bold text-white md:text-3xl">まずは、お話ししませんか？</h2>
                  <p className="mt-4 text-red-100 md:text-lg">
                    カジュアルな面談から始めませんか？プレッシャーなく、お互いの今について話しましょう。
                    あなたの経験や思いを聞かせてください。
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 md:justify-end w-full">
                  <Link
                    href="https://s.lmes.jp/landing-qr/2007043693-47Wd0Wl8?uLand=r7Pjwb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-button bg-white text-red-600 hover:bg-red-50"
                  >
                    カジュアル面談に申し込む
                    <ArrowRight className="ml-2 h-4 w-4 inline-block" />
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16 mx-auto max-w-3xl">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-red-500" />
                よくある質問
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-red-100 mb-4">
                  <AccordionTrigger className="hover:text-red-600 py-4 px-6 bg-white rounded-t-xl shadow-sm">
                    今さら応募してもいいのでしょうか？
                  </AccordionTrigger>
                  <AccordionContent className="bg-white px-6 pb-4 rounded-b-xl shadow-sm border-t border-red-50">
                    はい、ぜひお待ちしています。以前別の道を選ばれた方を対象とした特別な採用枠「アムルナイ採用」を設けています。
                    あなたの選択を尊重した上で、新たな可能性を一緒に探りたいと考えています。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-red-100 mb-4">
                  <AccordionTrigger className="hover:text-red-600 py-4 px-6 bg-white rounded-t-xl shadow-sm">
                    選考フローは変わりますか？
                  </AccordionTrigger>
                  <AccordionContent className="bg-white px-6 pb-4 rounded-b-xl shadow-sm border-t border-red-50">
                    アムルナイ採用では、通常の選考フローとは異なり、よりカジュアルな形でスタートします。
                    まずは気軽な面談から始め、お互いの現在の状況や希望をすり合わせていきます。
                    以前の選考結果も参考にしながら、最適なポジションを一緒に考えていきましょう。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-red-100 mb-4">
                  <AccordionTrigger className="hover:text-red-600 py-4 px-6 bg-white rounded-t-xl shadow-sm">
                    IT未経験でも応募できますか？
                  </AccordionTrigger>
                  <AccordionContent className="bg-white px-6 pb-4 rounded-b-xl shadow-sm border-t border-red-50">
                    はい、もちろんです。FunClockはIT人材の教育に力を入れており、未経験からのエンジニア育成に実績があります。
                    実際に社員の95%が業界未経験からのスタートです。あなたの可能性を最大限に引き出すための教育プログラムが充実しています。
                    前回の選考時と状況が変わっていても、ぜひお気軽にご連絡ください。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-red-100 mb-4">
                  <AccordionTrigger className="hover:text-red-600 py-4 px-6 bg-white rounded-t-xl shadow-sm">
                    どのような働き方がありますか？
                  </AccordionTrigger>
                  <AccordionContent className="bg-white px-6 pb-4 rounded-b-xl shadow-sm border-t border-red-50">
                    新規プロジェクトの増加に伴い、様々な働き方の選択肢があります。
                    プロジェクトやポジションによって調整可能で、あなたのスキルや希望に合わせた働き方を相談できます。
                    ワークライフバランスを大切にする文化があり、あなたらしく働ける環境を整えています。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* YouTube動画 */}
            <div className="mt-16 mx-auto max-w-3xl">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-red-500" />
                会社紹介動画
              </h3>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/BGQ3Ah8RZVo"
                  title="【約2分でわかる!!】株式会社FunClock"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full"
                ></iframe>
              </div>
            </div>

            {/* Instagram */}
            <div className="mt-16 mx-auto max-w-3xl text-center">
              <Link
                href="https://www.instagram.com/funclock_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Instagram className="h-5 w-5" />
                <span className="font-medium">FunClock公式Instagramをフォロー</span>
              </Link>
              <p className="mt-3 text-gray-600">
                日常の様子や社内イベントなど、FunClockの雰囲気をチェックしてみてください！
              </p>
            </div>

            {/* ブログ */}
            <div className="mt-8 mx-auto max-w-3xl text-center">
              <Link
                href="https://blog.funclock.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <BookOpen className="h-5 w-5" />
                <span className="font-medium">FunClock公式ブログを読む</span>
              </Link>
              <p className="mt-3 text-gray-600">
                社員の声や技術情報など、FunClockの取り組みについて詳しく知ることができます！
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="border-t bg-white py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-50/30"></div>
        <div className="container relative z-10">
          <div className="flex flex-col items-center justify-center">
            <Link href="https://www.funclock.co.jp/" target="_blank" rel="noopener noreferrer">
              <div className="mb-6">
                <Image src="/funclock-logo.jpeg" alt="FunClock" width={200} height={50} className="h-12 w-auto" />
              </div>
            </Link>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} FunClock Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
