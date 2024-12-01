import SideBarWrapper from "@/components/shared/sidebar/SidebarWrapper";

type Props = React.PropsWithChildren<{}>;

const RootLayout = ({ children }: Props) => {
  return (
    <SideBarWrapper>{children}</SideBarWrapper>
  )
}

export default RootLayout;
