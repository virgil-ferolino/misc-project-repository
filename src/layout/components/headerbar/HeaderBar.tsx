import type { ReactNode } from "react";
import { Link, useMatches, type UIMatch } from "react-router";
import { BsFillTriangleFill } from "react-icons/bs";

interface Breadcrumb {
  crumb: (match: UIMatch) => ReactNode;
}

const BreadCrumbs = () => {
  const matches = useMatches();
  const crumbs = matches.filter(
    (match): match is UIMatch<unknown, Breadcrumb> =>
      Boolean((match.handle as Breadcrumb)?.crumb),
  );

  return (
    <div className="breadcrumbs text-base">
      <ul>
        {crumbs.map((match, index) => {
          const isLast = index === crumbs.length - 1;
          const label = match.handle.crumb(match);

          return (
            <li key={match.pathname} className="flex items-center gap-2">
              {isLast ? (
                <span>
                  <BsFillTriangleFill className="rotate-90 text-white size-3" />
                  {label}
                </span>
              ) : (
                <Link to={match.pathname}>{label}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const HeaderBar = () => {
  return (
    <div className="h-[10dvh] w-full bg-slate-700 flex items-center px-10">
      <BreadCrumbs />
    </div>
  );
};

export default HeaderBar;
