import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  SubContainer,
  Heading,
  ImageContainer,
  Image,
  EditorContainer,
  IconsContainer,
  ButtonItem,
  HrLine,
  InputField,
  ListItem,
} from './styledComponents'

class Text extends Component {
  state = {inputText: '', isBold: false, isUnderline: false, isItalic: false}

  onInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onClickBold = () => {
    this.setState(prev => ({isBold: !prev.isBold}))
  }

  onClickUnderline = () => {
    this.setState(prev => ({isUnderline: !prev.isUnderline}))
  }

  onClickItalic = () => {
    this.setState(prev => ({isItalic: !prev.isItalic}))
  }

  render() {
    const {isBold, isUnderline, isItalic} = this.state
    const boldColor = isBold ? '#faff00' : '#f1f5f9'
    const underlineColor = isUnderline ? '#faff00' : '#f1f5f9'
    const italicColor = isItalic ? '#faff00' : '#f1f5f9'

    const weightItem = isBold ? 'bold' : 'normal'
    const underlineItem = isUnderline ? 'underline' : 'normal'
    const textItalic = isItalic ? 'italic' : 'normal'

    return (
      <MainContainer>
        <SubContainer>
          <ImageContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <EditorContainer>
            <IconsContainer>
              <ListItem>
                <ButtonItem
                  color={boldColor}
                  onClick={this.onClickBold}
                  data-testid="bold"
                >
                  <VscBold size={25} />
                </ButtonItem>
              </ListItem>
              <ListItem>
                <ButtonItem
                  color={italicColor}
                  onClick={this.onClickItalic}
                  data-testid="italic"
                >
                  <GoItalic />
                </ButtonItem>
              </ListItem>
              <ListItem>
                <ButtonItem
                  color={underlineColor}
                  onClick={this.onClickUnderline}
                  data-testid="underline"
                >
                  <AiOutlineUnderline />
                </ButtonItem>
              </ListItem>
            </IconsContainer>
            <HrLine />
            <InputField
              rows="5"
              cols="50"
              onChange={this.onInputText}
              isBold={weightItem}
              isUnderline={underlineItem}
              isItalic={textItalic}
            />
          </EditorContainer>
        </SubContainer>
      </MainContainer>
    )
  }
}

export default Text
