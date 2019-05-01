import {css} from '../../../../vendor/lit-element/lit-element.js'


const cssStr = css`
.dat-info > * {
  max-width: 100%;
}

h2 {
  display: flex;
  font-size: 27px;
  margin: 0;
  font-weight: 500;
}

h2 span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.thumb {
  border-radius: 50%;
}

.thumb,
.favicon {
  width: 32px;
  height: 32px;
  object-fit: cover;
  margin-right: 10px;
}

.description {
  line-height: 1.6;
  color: rgba(0,0,0,.6);
}
`
export default cssStr
