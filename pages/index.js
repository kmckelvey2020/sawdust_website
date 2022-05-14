import Head from "next/head";
import Button from "@/src/ui/button";
import Checkbox from "@/src/ui/checkbox";
import Radio from "@/src/ui/radio";
import Textfield from "@/src/ui/textfield";

export default function LandingPage() {
  return (
    <div className="container">
      <Head>
        <title>Sawdust CastleRock Home</title>
        <meta name="description" content="Home of Sawdust Castle Rock - for restored and handcrafted furniture, art, woodburning, and specialty woodcrafting. Woodcrafting with heart and history." />
      </Head>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>paragraph</p>
      <span className="tiny-text">tiny text</span>
      <a href="https://www.google.com">This is a link</a>
      <br />
      <Button
        label="button1">
          Button
      </Button>
      <Checkbox 
        label="Checkbox Label1"
        value="thing1"
        checked
      />
      <Checkbox 
        label="Checkbox Label2"
        value="thing2"
        checked={false}
      />
      <Checkbox 
        label="Checkbox Label3"
        value="thing3"
        checked={false}
      />
      <Radio 
        label="Radio Label1"
        value="checked"
        groupname="radiogroup"
      />
      <Radio 
        label="Radio Label2"
        value="checked"
        groupname="radiogroup"
      />
      <Radio 
        label="Radio Label3"
        value="checked"
        groupname="radiogroup"
      />
      <Textfield 
        label="Textfield Label"
        placeholder="Textfield placeholder"
        value="value" 
      />
    </div>
  )
}
