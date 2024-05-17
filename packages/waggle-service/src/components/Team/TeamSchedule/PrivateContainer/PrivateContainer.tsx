import TeamAllMemberAuthorizationContainer from "@/components/common/AuthorizationContainer/team/TeamAllMemberAuthorizationContainer";

const PrivateContainer = ({
  children,
  isPrivate,
  renderLock,
}: {
  children: React.ReactNode;
  isPrivate: boolean;
  renderLock: React.ReactNode;
}) => {
  return (
    <>
      {isPrivate ? (
        <TeamAllMemberAuthorizationContainer renderLock={renderLock}>
          {children}
        </TeamAllMemberAuthorizationContainer>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
export default PrivateContainer;
