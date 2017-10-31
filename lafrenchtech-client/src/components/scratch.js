<Card p={3} width={[1, 1 / 2, 1 / 3]}>
  <Image src={props.company.logo} />

  <Link href={props.company.url} target="_blank">
    {props.company.name}
  </Link>
  <Divider color="gray2" />
  <Pre f={0}>{props.company.name}</Pre>
</Card>;
