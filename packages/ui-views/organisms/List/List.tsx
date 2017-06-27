import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'

interface Props {
  theme: Object,
  events: Array<Object>
}

const List: SFC<Props> = ({ theme, events }) => {
    let currentTheme = themeable(theme)
    return (
      <section {...currentTheme(1, 'list_spaced')}>
        <div {...currentTheme(2, 'list_info')}>
            <h4 {...currentTheme(3, 'info_title')}>Latest contributions</h4>
        </div>
        {events.map((item, i) => (
          <div {...currentTheme(i+i+i+i+i+i+4, 'list_item')}>
              <div {...currentTheme(i+i+i+i+i+i+5, 'item_info')}>
                  <h2 {...currentTheme(i+i+i+i+i+i+6, 'info_title')}><a>{item.provider.name}</a> {item.action} {item.numericValue} {item.unit} from/to <a>{item.receiver.name}</a></h2>
                  <div {...currentTheme(i+i+i+i+i+i+8, 'info_actions')}>
                      <button {...currentTheme(i+i+i+i+i+i+9, 'actions_date')}>{item.start}</button>
                  </div>
                  <div {...currentTheme(i+i+i+i+i+i+7, 'info_description')}>{item.note}</div>
              </div>
          </div>
        ))}
      </section>
    )
}

export default List
