import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Radio, Music, Users, MapPin, Headphones, Star, Phone, Mail } from "lucide-react"
import { siFacebook, siGofundme, siX } from "simple-icons"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Radio className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-heading font-bold text-xl text-primary">Shalom South Florida</h1>
                <p className="text-sm text-muted-foreground">Jewish Radio Show</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#listen" className="text-foreground hover:text-primary transition-colors">
                Listen
              </a>
              <a href="#sponsors" className="text-foreground hover:text-primary transition-colors">
                Sponsors
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-card via-background to-card/50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-accent text-accent-foreground">Live Every Sunday</Badge>
          <h2 className="font-heading font-bold text-4xl md:text-6xl mb-6 text-balance">
            Welcome to <span className="text-primary">Shalom South Florida</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Every Sunday morning, South Florida's Jewish community tunes in to hear their favorite Jewish music, news,
            comedy, and engaging interviews with host Roni.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center space-x-2 text-lg">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-semibold">Sundays 9:30-11:00 AM ET</span>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Since 1986</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#listen" className="flex items-center gap-2">
                <Headphones className="w-5 h-5 mr-2" />
                Listen Live
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-3xl mb-4">What Makes Us Special</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the rich tapestry of Jewish culture through music, news, and community engagement
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Music className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="font-heading">Diverse Music</CardTitle>
                <CardDescription>
                  Chassidic, Israeli, and Yiddish music celebrating our rich musical heritage
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="font-heading">Community Focus</CardTitle>
                <CardDescription>
                  Jewish news, interviews, and content that matters to South Florida's Jewish community
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="font-heading">Fun & Engaging</CardTitle>
                <CardDescription>
                  Jewish comedy, on-air contests, and giveaways make every show entertaining
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Host Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-heading font-bold text-3xl mb-6">Meet Your Host</h3>
                <div className="space-y-4">
                  <h4 className="font-heading font-bold text-xl text-primary">Roni</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Jewish radio host Roni has been South Florida's Jewish radio "maven" since first hitting the
                    airwaves in 1986. With an M.S. in Journalism Mass Communication, Roni ensures that all listeners
                    have a great time every Sunday morning.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Badge variant="secondary">M.S. Journalism</Badge>
                    <Badge variant="secondary">Since 1986</Badge>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center">
                  <img src="images/roni.jpg" />
                  {/* <Radio className="w-24 h-24 text-primary/50" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Listen Section */}
      <section className="py-20" id="listen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-3xl mb-4">Ways to Listen</h3>
            <p className="text-muted-foreground text-lg">Tune in every Sunday from 9:30-11:00 AM ET</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="sm:col-span-2 lg:col-span-1 flex justify-center">
              <img src="images/coverage.png" className="rounded-lg max-h-100"/>
            </div>
            <Card className="row-start-2 col-start-1 lg:row-start-1 lg:col-start-2"> 
              <CardHeader>
                <CardTitle className="font-heading flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  South Florida Radio
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Palm Beaches:</span>
                  <span className="font-semibold">95.9FM & 106.9FM</span>
                </div>
                <div className="flex justify-between">
                  <span>South Palm Beach:</span>
                  <span className="font-semibold">95.3FM</span>
                </div>
                <div className="flex justify-between">
                  <span>N. Broward:</span>
                  <span className="font-semibold">96.9FM</span>
                </div>
                <div className="flex justify-between">
                  <span>Miami-Dade:</span>
                  <span className="font-semibold">WSFS 104.3HD3</span>
                </div>
              </CardContent>
            </Card>
            <Card className="row-start-3 sm:row-start-2 col-start-1 sm:col-start-2 lg:row-start-1 lg:col-start-3">
              <CardHeader>
                <CardTitle className="font-heading flex items-center">
                  <Headphones className="w-5 h-5 mr-2 text-primary" />
                  Online & Apps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-transparent" variant="outline">
                  <a className="flex gap-2 items-center" href="https://trueoldiesfla.com/" target="_blank">
                    <Radio className="w-4 h-4 mr-2" />
                    The True Oldies Channel
                  </a> 
                </Button>
                <div className="flex gap-2 items-center w-full bg-transparent px-6 py-2 border rounded text-center">
                  <Music className="w-4 h-4 mr-2" />
                  Most Radio Apps
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20" id="sponsors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-3xl mb-4">Sponsors</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
            <img src="images/sponsor1.png" className="max-w-50"/>
            <img src="images/sponsor2.webp" className="max-w-50"/>
            <img src="images/sponsor3.png" className="max-w-50"/>
            <img src="images/sponsor4.png" className="max-w-50"/>
            <img src="images/sponsor5.jpg" className="max-w-50"/>
            <img src="images/sponsor6.png" className="max-w-50"/>
            <img src="images/sponsor7.png" className="max-w-50"/>
            <img src="images/sponsor8.png" className="max-w-50"/>
            <img src="images/sponsor9.png" className="max-w-50"/>
            <img src="images/sponsor10.png" className="max-w-50"/>
            <img src="images/sponsor11.png" className="max-w-50"/>
            <img src="images/sponsor12.jpg" className="max-w-50"/>
            <img src="images/sponsor13.gif" className="max-w-50"/>
            <img src="images/sponsor14.png" className="max-w-50"/>
            <img src="images/sponsor15.jpg" className="max-w-50"/>
            <img src="images/sponsor16.png" className="max-w-50"/>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Radio className="w-5 h-5 text-primary-foreground" />
              </div>
              <h4 className="font-heading font-bold text-xl text-primary">Shalom South Florida</h4>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Bringing Jewish music, culture, and community to South Florida every Sunday morning since 1986.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button variant="outline" size="sm" className="bg-transparent">             
                <a href="https://x.com/shalomsouthFL" target="_blank" className="flex gap-2 items-center">
                  <div dangerouslySetInnerHTML={{ __html: siX.svg}}></div>
                  Follow on X
                </a>
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent">
                <a href="https://www.facebook.com/ShalomSouthFL" target="_blank" className="flex gap-2 items-center">
                  <div dangerouslySetInnerHTML={{ __html: siFacebook.svg}}></div>
                  Like on Facebook
                </a>
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent">
                <a href="https://www.gofundme.com/f/help-keep-shalom-south-florida-on-the-air" target="_blank" className="flex gap-2 items-center">
                  <div dangerouslySetInnerHTML={{ __html: siGofundme.svg}}></div>
                  Support on GoFundMe
                </a>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm">Phone</p>
                  <p className="text-sm text-muted-foreground">(561) 750-0888</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm">Email</p>
                  <p className="text-sm text-muted-foreground">Roni@shalomsouthflorida.com</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm">Address</p>
                  <p className="text-sm text-muted-foreground">8895 N Military Trail, Suite 206c<br />Palm Beach Gardens, FL 33410</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm">Sundays 9:30-11:00 AM ET</span>
              </div>
              <div className="flex items-center space-x-2">
                <Radio className="w-4 h-4 text-primary" />
                <span className="text-sm">Multiple FM Frequencies</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 my-4" />
          <div className="pt-6 flex flex-col gap-4 justify-start">
            <div className="font-semibold">Please send us any new albums for consideration or press releases with two weeks advance notice to:</div>
            <div>Attn: Roni<br />Shalom South Florida<br />c/o VCMG Live<br />8895 N Military Trail, Suite 206c<br />Palm Beach Gardens, FL 33410></div>
          </div>
        </div>
      </footer>
    </div>
  )
}