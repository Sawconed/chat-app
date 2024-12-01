import ItemList from "@/components/shared/item-list/ItemList";

type Props = React.PropsWithChildren<{}>;

const ConversationsLayout = ({ children }: Props) => {
  return (
    <>
      <ItemList title="Conversations">Conversations Page</ItemList>
      {children}
    </>
  )
}

export default ConversationsLayout;
