import * as React from 'react'
import VocabularyList from './vocabulary-list'

export interface ChatPanelProps {
  setIsChatOpen: (value: boolean) => void
  messages: any[]
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  selectedClass: string
  saidWords: string[]
  input: string
  handleTextareaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  textareaRef: React.RefObject<HTMLTextAreaElement>
  setInput: (value: string) => void
}

export function ChatPanel({
  setIsChatOpen,
  messages,
  onSubmit,
  selectedClass,
  saidWords,
  input,
  handleTextareaChange,
  textareaRef
}: ChatPanelProps) {
  return (
    <div
      style={{
        width: '100%', // Responsive width based on viewport
        height: '75vh', // Fixed height
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end' // Align chat to the bottom
      }}
    >
      {/* Close Button */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <button
          onClick={() => setIsChatOpen(false)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '5px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#34B7F1'
          }}
        >
          ✖
        </button>
      </div>

      <div
        style={{
          flex: '1',
          overflowY: 'auto' // Scrollable
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              textAlign: message.role === 'user' ? 'right' : 'left',
              marginBottom: '8px',
              padding: '2px'
            }}
          >
            <div
              style={{
                display: 'inline-block',
                padding: '8px 12px',
                borderRadius: '20px',
                backgroundColor:
                  message.role === 'user' ? '#DCF8C6' : '#E5E5EA',
                color: '#000',
                maxWidth: '75%',
                wordWrap: 'break-word'
              }}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={onSubmit}
        style={{
          display: 'flex',
          padding: '8px',
          borderTop: '1px solid #E5E5EA'
        }}
      >
        <textarea
          name="prompt"
          value={input} // Always keep the input updated
          onChange={handleTextareaChange}
          ref={textareaRef} // Attach ref to the textarea
          rows={1}
          style={{
            flex: '1',
            padding: '8px',
            borderRadius: '20px',
            border: 'none',
            resize: 'none', // Disable manual resizing
            overflow: 'hidden', // Hide overflow to make it look clean
            backgroundColor: '#F0F0F0',
            color: 'black'
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: '8px',
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: '#34B7F1',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </form>
      <VocabularyList selectedClass={selectedClass} saidWords={saidWords} />
    </div>
  )
}
