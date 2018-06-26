import { getOr } from 'lodash/fp'

type memberProps = {
  name: string | null,
  iconPath: string | null,
}

export default function getMemberThumbList(members: Array<memberProps>) {
  const memberThumbList: Array<string> = members
    .filter(
      (member) =>
        (member.name && member.name !== null && member.name !== '') ||
        (member.iconPath && member.iconPath !== null && member.iconPath !== ''),
    )
    .map(
      (member) =>
        member.iconPath && member.iconPath !== null && member.iconPath !== ''
          ? member.iconPath
          : getOr('', ['name', '0'], member),
    )
    .filter((m) => m && m !== null && m !== '')
  return memberThumbList
}
