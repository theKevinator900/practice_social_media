import { Button, Divider, Form, Message } from "semantic-ui-react";


const CommonSocials = ({
  user: {facebook, instagram, youtube, twitter},
  handleChange,
  showSocialLinks,
  setShowSocialLinks
}) => {
  return <>
    <Button 
      content="Add Social Links"
      color="orange"
      icon="at"
      type="button"
      onClick={ () => setShowSocialLinks(!showSocialLinks)}
    />

    {showSocialLinks && (<>
      <Divider />
      <Message 
        icon="attention"
        info
        size="small"
        header="Social Media Links Are Optional"
      />
      <Form.Input 
        icon="facebook f"
        iconPosition="left"
        placeholder="facebook"
        name="facebook"
        value={facebook}
        onChange={handleChange}
      />
      <Form.Input 
        icon="twitter"
        iconPosition="left"
        placeholder="twitter"
        name="twitter"
        value={twitter}
        onChange={handleChange}
      />
      <Form.Input 
        icon="instagram"
        iconPosition="left"
        placeholder="instagram"
        name="instagram"
        value={instagram}
        onChange={handleChange}
      />
      <Form.Input 
        icon="youtube"
        iconPosition="left"
        placeholder="youtube"
        name="youtube"
        value={youtube}
        onChange={handleChange}
      />
    </>)}
  </>;
};

export default CommonSocials;
