import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'
import { authedGraphQL } from '../../../services/api'

interface MembersProps {
  data?: {
    agent: {
      members: any // :TODO: create custom HoC to help prehandle this output
    },
  },
  loading?: boolean,
  error?: Error,
  theme: Object
}


const MembersQuery = authedGraphQL(`
  agent(id: 135) {
    members {
      name
      image
    }
  }
`)

const MembersBig: SFC<MembersProps> = MembersQuery(({data, theme, loading, error }) => {
    let currentTheme = themeable(theme)
    return (
      loading ? <strong>Loading...</strong> : (error ? <p style={{ color: '#F00' }}>API error</p> :
      <section {...currentTheme(1, 'membersBig')}>
        <h4 {...currentTheme(2, 'membersBig_title')}>{data.agent.members.length} Members</h4>
        <div {...currentTheme(3, 'membersBig_list')}>
          <div {...currentTheme(4, 'row')}>
            {data.agent.members.map((item, i) => (
            <div {...currentTheme(i + i + i + i + 5, 'medium-2', 'columns', 'end')}>
              <div {...currentTheme(i + i + i + i + 6, 'list_member')}>
                <span {...currentTheme(i + i + i + i + 7, 'member_photo')}>
                  <img src={item.image} />
                </span>
                <h3 {...currentTheme(i + i + i + i + 8, 'member_name')}>{item.name}</h3>
              </div>  
            </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
})

export default MembersBig
