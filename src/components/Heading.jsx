import TagLine from './TagLine';
import { TypingTitle } from './CustomTexts';

const Heading = ({ className, title, text, tag, titleStyles }) => {
  return (
    <div className={`${className || ''} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}>
      {tag && <TagLine className='mb-4 md:justify-center'>{tag}</TagLine>}
      {title && (
        <TypingTitle className={`h2 flex flex-wrap ${titleStyles || ''}`} title={title} />
      )}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  )
}

export default Heading