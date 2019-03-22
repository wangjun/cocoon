/**
 * Cocoon Blocks
 * @author: yhira
 * @link: https://wp-cocoon.com/
 * @license: http://www.gnu.org/licenses/gpl-2.0.html GPL v2 or later
 */

const { Fragment } = wp.element;
const { __ } = wp.i18n;
const { registerFormatType, toggleFormat } = wp.richText;
const { BlockControls, RichTextShortcut, RichTextToolbarButton } = wp.editor;
const { Toolbar, DropdownMenu } = wp.components;
const THEME_NAME = 'cocoon';
const FORMAT_TYPE_NAME = 'cocoon-blocks/markers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

registerFormatType( FORMAT_TYPE_NAME, {
  title: __( '文字', THEME_NAME ),
  tagName: 'span',
  className: 'markers',
  edit( { isActive, value, onChange } ) {

    var cursolPositionObject = value.formats[value.start];
    var type = cursolPositionObject ? cursolPositionObject[0].type : '';

    return (
      <Fragment>
        <BlockControls>
          <Toolbar>
            <DropdownMenu
              icon={ <FontAwesomeIcon icon="highlighter" /> }
              label={__( '文字', THEME_NAME )}
              className='letters'
              controls={ [
                  {
                      title: __( '黄色マーカー', THEME_NAME ),
                      icon: <FontAwesomeIcon icon="highlighter" />,
                      className: 'marker',
                      isActive: type === 'cocoon-blocks/marker',
                      onClick: () => onChange( toggleFormat( value, { type: 'cocoon-blocks/marker' } ) )
                  },
                  {
                      title: __( '黄色アンダーラインマーカー', THEME_NAME ),
                      icon: <FontAwesomeIcon icon="window-minimize" />,
                      isActive: type === 'cocoon-blocks/marker-under',
                      onClick: () => onChange( toggleFormat( value, { type: 'cocoon-blocks/marker-under' } ) )
                  },
                  {
                      title: __( '赤色マーカー', THEME_NAME ),
                      icon: <FontAwesomeIcon icon="highlighter" />,
                      isActive: type === 'cocoon-blocks/marker-red',
                      onClick: () => onChange( toggleFormat( value, { type: 'cocoon-blocks/marker-red' } ) )
                  },
                  {
                      title: __( '赤色アンダーラインマーカー', THEME_NAME ),
                      icon: <FontAwesomeIcon icon="window-minimize" />,
                      isActive: type === 'cocoon-blocks/marker-under-red',
                      onClick: () => onChange( toggleFormat( value, { type: 'cocoon-blocks/marker-under-red' } ) )
                  },
                  {
                      title: __( '青色マーカー', THEME_NAME ),
                      icon: <FontAwesomeIcon icon="highlighter" />,
                      isActive: type === 'cocoon-blocks/marker-blue',
                      onClick: () => onChange( toggleFormat( value, { type: 'cocoon-blocks/marker-blue' } ) )
                  },
                  {
                      title: __( '青色アンダーラインマーカー', THEME_NAME ),
                      icon: <FontAwesomeIcon icon="window-minimize" />,
                      isActive: type === 'cocoon-blocks/marker-under-blue',
                      onClick: () => onChange( toggleFormat( value, { type: 'cocoon-blocks/marker-under-blue' } ) )
                  },
              ] }
          />
          </Toolbar>
        </BlockControls>
      </Fragment>
    );
  },
} );