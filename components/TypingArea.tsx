/** @jsx jsx */
import { jsx } from '@emotion/core'
import tw from '@tailwindcssinjs/macro'
import { Word } from './Word'
import React, { useEffect, useState } from 'react'

const s = {
  typingArea: tw`
    text-xl
    antialiased
  `,
  template: tw`
    my-1
    break-words
  `,
  user: tw`
    my-1
    break-words
  `,
}

export enum Mode {
  typealong = 'typealong',
}

export interface TypingAreaProps {
  words: Array<string>
  userWords: Array<string>
  showCaret: boolean
  mode?: Mode
  finished?: boolean
  onStatsUpdate?: (stats: {
    correct: number
    wrong: number
    total: number
  }) => void
}

export const TypingArea: React.FC<TypingAreaProps> = ({
  words,
  userWords,
  showCaret,
  mode,
  finished,
  onStatsUpdate,
}) => {
  // TODO: Move to global state / context
  const [stats, setStats] = useState({
    correct: 0,
    wrong: 0,
    total: 0,
  })

  useEffect(() => {
    const offset = stats.total

    userWords.slice(offset).forEach((text, i) => {
      if (text == '') {
        return
      }

      if (text == words[offset + i]) {
        setStats((prevStats) => {
          const { correct, total } = prevStats
          return { ...prevStats, correct: correct + 1, total: total + 1 }
        })
      } else {
        setStats((prevStats) => {
          const { wrong, total } = prevStats
          return { ...prevStats, wrong: wrong + 1, total: total + 1 }
        })
      }
    })
  }, [userWords.length, finished])

  useEffect(() => {
    if (onStatsUpdate) {
      onStatsUpdate(stats)
    }
  }, [stats])

  if (mode == 'typealong') {
    const remainingWords = words.slice(userWords.length)

    return (
      <div css={s.typingArea}>
        <span css={s.user} data-testid="user">
          {userWords.map((text, i) => {
            return (
              <React.Fragment key={i}>
                <Word
                  template={words[i]}
                  userInput={text}
                  showCaret={showCaret && i == userWords.length - 1}
                  mode={mode}
                />
                <span>&nbsp;</span>
              </React.Fragment>
            )
          })}
        </span>
        <span css={s.template} data-testid="template">
          {remainingWords.join(' ')}
        </span>
      </div>
    )
  }

  return (
    <div css={s.typingArea}>
      <p css={s.template} data-testid="template">
        {words.join(' ')}
      </p>
      <p css={s.user} data-testid="user">
        {userWords.map((text, i) => {
          return (
            <React.Fragment key={i}>
              <Word
                template={words[i]}
                userInput={text}
                showCaret={showCaret && i == userWords.length - 1}
              />
              <span>&nbsp;</span>
            </React.Fragment>
          )
        })}
      </p>
    </div>
  )
}
