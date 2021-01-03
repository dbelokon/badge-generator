/**
 * Package badges module.
 */
import { COLOR } from "../constants/appearance";
import { REGISTRY, SHIELDS_API } from "../constants/urls";
import {
  buildUrl,
  genericBadge,
  logoParams,
  markdownImageWithLink,
} from "./badges";

/**
 * Static dependency badge.
 */
export function dependency(name: string, registry: REGISTRY) {
  const isLarge = false;
  const url = `${registry}/${name}`;

  return genericBadge("dependency", name, COLOR.Default, isLarge, url);
}

/**
 * Dynamic Node package badge.
 *
 * The badge will dynamically display given package's locked version number, using your repo's
 * package.json file.
 *
 * Note - the badge URL needs something added to work for dev dependencies. I'm happy to not support
 * that now.
 *
 * Shields.io does Pipenv lock files, but not requirements.txt file, it seems. And not Gemfile
 * either.
 */
export function nodeVersionBadge(
  username: string,
  repoName: string,
  pkgName: string,
  logo?: string,
  logoColor?: string
) {
  if (!pkgName) {
    pkgName = repoName;
  }
  const title = `Package - ${pkgName}`;

  const imgUrl = `${SHIELDS_API.PACKAGE}/${username}/${repoName}/${pkgName}`,
    params = logoParams(false, logo, logoColor),
    fullImgUrl = buildUrl(imgUrl, params);

  const target = `${REGISTRY.Node}/${pkgName}`;

  return markdownImageWithLink(title, fullImgUrl, target);
}