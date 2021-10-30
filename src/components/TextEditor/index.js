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
} from './styledComponents'

class Text extends Component {
  state = {InputText: '', isBold: false, isUnderline: false, isItalic: false}

  onInputText = event => {
    this.setState({InputText: event.target.value})
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
    const {InputText, isBold, isUnderline, isItalic} = this.state
    const boldColor = isBold ? '#faff00' : '#f1f5f9'
    const underlineColor = isUnderline ? '#faff00' : '#f1f5f9'
    const italicColor = isItalic ? '#faff00' : '#f1f5f9'

    const weightItem = isBold ? 'bold' : 'normal'
    const underlineItem = isUnderline ? 'underline' : null
    const textItalic = isItalic ? 'Italic' : null

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
              <ButtonItem color={boldColor} onClick={this.onClickBold}>
                <VscBold />
              </ButtonItem>
              <ButtonItem color={italicColor} onClick={this.onClickItalic}>
                <GoItalic />
              </ButtonItem>
              <ButtonItem color={underlineColor} onClick={this.onClickUnderline}>
                <AiOutlineUnderline />
              </ButtonItem>
            </IconsContainer>
            <HrLine />
            <InputField value={InputText} onChange={this.onInputText} />
          </EditorContainer>
        </SubContainer>
      </MainContainer>
    )
  }
}

export default Text
