import { CrossmintPayButton } from '@crossmint/client-sdk-react-ui';

const clientKey = process.env.NEXT_PUBLIC_CROSSMINT_CLIENT_API_KEY;

export default function Wallet() {
  return (
    <div>
      <CrossmintPayButton
        clientId={clientKey}
        environment="production"
        mintConfig={{ type: 'erc-721' }}
      />
    </div>
  );
}
