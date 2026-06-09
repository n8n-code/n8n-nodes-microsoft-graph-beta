import type { INodeProperties } from 'n8n-workflow';

export const organizationOrganizationalBrandingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					]
				}
			},
			"options": [
				{
					"name": "Organization Delete Branding",
					"value": "Organization Delete Branding",
					"action": "Delete organizationalBranding",
					"description": "Delete the default organizational branding object. To delete the organizationalBranding object, all images (Stream types) must first be removed from the object.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding"
						}
					}
				},
				{
					"name": "Organization Get Branding",
					"value": "Organization Get Branding",
					"action": "Get organizationalBranding",
					"description": "Retrieve the default organizational branding object, if the **Accept-Language** header is set to `0` or `default`. If no default organizational branding object exists, this method returns a `404 Not Found` error. If the **Accept-Language** header is set to an existing locale identified by the value of its **id**, this method retrieves the branding for the specified locale. This method retrieves only non-Stream properties, for example, **usernameHintText** and **signInPageText**. To retrieve Stream types of the default branding, for example, **bannerLogo** and **backgroundImage**, use the GET organizationalBrandingLocalization method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding"
						}
					}
				},
				{
					"name": "Organization Update Branding",
					"value": "Organization Update Branding",
					"action": "Update organizationalBranding",
					"description": "Update the properties of the default branding object specified by the organizationalBranding resource.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding"
						}
					}
				},
				{
					"name": "Organization Get Branding Background Image",
					"value": "Organization Get Branding Background Image",
					"action": "Get backgroundImage for the navigation property branding from organization",
					"description": "Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image will reduce bandwidth requirements and make the page load faster.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/backgroundImage"
						}
					}
				},
				{
					"name": "Organization Update Branding Background Image",
					"value": "Organization Update Branding Background Image",
					"action": "Update backgroundImage for the navigation property branding in organization",
					"description": "Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image will reduce bandwidth requirements and make the page load faster.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/backgroundImage"
						}
					}
				},
				{
					"name": "Organization Get Branding Banner Logo",
					"value": "Organization Get Branding Banner Logo",
					"action": "Get bannerLogo for the navigation property branding from organization",
					"description": "A banner version of your company logo that appears on the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/bannerLogo"
						}
					}
				},
				{
					"name": "Organization Update Branding Banner Logo",
					"value": "Organization Update Branding Banner Logo",
					"action": "Update bannerLogo for the navigation property branding in organization",
					"description": "A banner version of your company logo that appears on the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/bannerLogo"
						}
					}
				},
				{
					"name": "Organization Get Branding Custom CSS",
					"value": "Organization Get Branding Custom CSS",
					"action": "Get customCSS for the navigation property branding from organization",
					"description": "CSS styling that appears on the sign-in page. The allowed format is .css format only and not larger than 25 KB.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/customCSS"
						}
					}
				},
				{
					"name": "Organization Update Branding Custom CSS",
					"value": "Organization Update Branding Custom CSS",
					"action": "Update customCSS for the navigation property branding in organization",
					"description": "CSS styling that appears on the sign-in page. The allowed format is .css format only and not larger than 25 KB.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/customCSS"
						}
					}
				},
				{
					"name": "Organization Get Branding Favicon",
					"value": "Organization Get Branding Favicon",
					"action": "Get favicon for the navigation property branding from organization",
					"description": "A custom icon (favicon) to replace a default Microsoft product favicon on an Azure AD tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/favicon"
						}
					}
				},
				{
					"name": "Organization Update Branding Favicon",
					"value": "Organization Update Branding Favicon",
					"action": "Update favicon for the navigation property branding in organization",
					"description": "A custom icon (favicon) to replace a default Microsoft product favicon on an Azure AD tenant.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/favicon"
						}
					}
				},
				{
					"name": "Organization Get Branding Header Logo",
					"value": "Organization Get Branding Header Logo",
					"action": "Get headerLogo for the navigation property branding from organization",
					"description": "A company logo that appears in the header of the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/headerLogo"
						}
					}
				},
				{
					"name": "Organization Update Branding Header Logo",
					"value": "Organization Update Branding Header Logo",
					"action": "Update headerLogo for the navigation property branding in organization",
					"description": "A company logo that appears in the header of the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/headerLogo"
						}
					}
				},
				{
					"name": "Organization Branding List Localizations",
					"value": "Organization Branding List Localizations",
					"action": "List localizations",
					"description": "Retrieve all localization branding objects, including the default branding.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/localizations"
						}
					}
				},
				{
					"name": "Organization Branding Create Localizations",
					"value": "Organization Branding Create Localizations",
					"action": "Create organizationalBrandingLocalization",
					"description": "Create a new organizationalBrandingLocalization object. This creates a localized branding and at the same time, the default branding if it doesn't exist. The default branding is created only once. It's loaded when a localized branding isn't configured for the user's browser language. To retrieve the default branding, see Get branding.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/localizations"
						}
					}
				},
				{
					"name": "Organization Branding Delete Localizations",
					"value": "Organization Branding Delete Localizations",
					"action": "Delete navigation property localizations for organization",
					"description": "Delete navigation property localizations for organization",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}"
						}
					}
				},
				{
					"name": "Organization Branding Get Localizations",
					"value": "Organization Branding Get Localizations",
					"action": "Get localizations from organization",
					"description": "Add different branding based on a locale.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}"
						}
					}
				},
				{
					"name": "Organization Branding Update Localizations",
					"value": "Organization Branding Update Localizations",
					"action": "Update the navigation property localizations in organization",
					"description": "Update the navigation property localizations in organization",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}"
						}
					}
				},
				{
					"name": "Organization Branding Get Localizations Background Image",
					"value": "Organization Branding Get Localizations Background Image",
					"action": "Get backgroundImage for the navigation property localizations from organization",
					"description": "Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image will reduce bandwidth requirements and make the page load faster.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/backgroundImage"
						}
					}
				},
				{
					"name": "Organization Branding Update Localizations Background Image",
					"value": "Organization Branding Update Localizations Background Image",
					"action": "Update backgroundImage for the navigation property localizations in organization",
					"description": "Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image will reduce bandwidth requirements and make the page load faster.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/backgroundImage"
						}
					}
				},
				{
					"name": "Organization Branding Get Localizations Banner Logo",
					"value": "Organization Branding Get Localizations Banner Logo",
					"action": "Get bannerLogo for the navigation property localizations from organization",
					"description": "A banner version of your company logo that appears on the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/bannerLogo"
						}
					}
				},
				{
					"name": "Organization Branding Update Localizations Banner Logo",
					"value": "Organization Branding Update Localizations Banner Logo",
					"action": "Update bannerLogo for the navigation property localizations in organization",
					"description": "A banner version of your company logo that appears on the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/bannerLogo"
						}
					}
				},
				{
					"name": "Organization Branding Get Localizations Custom CSS",
					"value": "Organization Branding Get Localizations Custom CSS",
					"action": "Get customCSS for the navigation property localizations from organization",
					"description": "CSS styling that appears on the sign-in page. The allowed format is .css format only and not larger than 25 KB.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/customCSS"
						}
					}
				},
				{
					"name": "Organization Branding Update Localizations Custom CSS",
					"value": "Organization Branding Update Localizations Custom CSS",
					"action": "Update customCSS for the navigation property localizations in organization",
					"description": "CSS styling that appears on the sign-in page. The allowed format is .css format only and not larger than 25 KB.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/customCSS"
						}
					}
				},
				{
					"name": "Organization Branding Get Localizations Favicon",
					"value": "Organization Branding Get Localizations Favicon",
					"action": "Get favicon for the navigation property localizations from organization",
					"description": "A custom icon (favicon) to replace a default Microsoft product favicon on an Azure AD tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/favicon"
						}
					}
				},
				{
					"name": "Organization Branding Update Localizations Favicon",
					"value": "Organization Branding Update Localizations Favicon",
					"action": "Update favicon for the navigation property localizations in organization",
					"description": "A custom icon (favicon) to replace a default Microsoft product favicon on an Azure AD tenant.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/favicon"
						}
					}
				},
				{
					"name": "Organization Branding Get Localizations Header Logo",
					"value": "Organization Branding Get Localizations Header Logo",
					"action": "Get headerLogo for the navigation property localizations from organization",
					"description": "A company logo that appears in the header of the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/headerLogo"
						}
					}
				},
				{
					"name": "Organization Branding Update Localizations Header Logo",
					"value": "Organization Branding Update Localizations Header Logo",
					"action": "Update headerLogo for the navigation property localizations in organization",
					"description": "A company logo that appears in the header of the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/headerLogo"
						}
					}
				},
				{
					"name": "Organization Branding Get Localizations Square Logo",
					"value": "Organization Branding Get Localizations Square Logo",
					"action": "Get squareLogo for the navigation property localizations from organization",
					"description": "A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/squareLogo"
						}
					}
				},
				{
					"name": "Organization Branding Update Localizations Square Logo",
					"value": "Organization Branding Update Localizations Square Logo",
					"action": "Update squareLogo for the navigation property localizations in organization",
					"description": "A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/squareLogo"
						}
					}
				},
				{
					"name": "Organization Branding Get Localizations Square Logo Dark",
					"value": "Organization Branding Get Localizations Square Logo Dark",
					"action": "Get squareLogoDark for the navigation property localizations from organization",
					"description": "A square dark version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/squareLogoDark"
						}
					}
				},
				{
					"name": "Organization Branding Update Localizations Square Logo Dark",
					"value": "Organization Branding Update Localizations Square Logo Dark",
					"action": "Update squareLogoDark for the navigation property localizations in organization",
					"description": "A square dark version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/squareLogoDark"
						}
					}
				},
				{
					"name": "Organization Get Branding Square Logo",
					"value": "Organization Get Branding Square Logo",
					"action": "Get squareLogo for the navigation property branding from organization",
					"description": "A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/squareLogo"
						}
					}
				},
				{
					"name": "Organization Update Branding Square Logo",
					"value": "Organization Update Branding Square Logo",
					"action": "Update squareLogo for the navigation property branding in organization",
					"description": "A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/squareLogo"
						}
					}
				},
				{
					"name": "Organization Get Branding Square Logo Dark",
					"value": "Organization Get Branding Square Logo Dark",
					"action": "Get squareLogoDark for the navigation property branding from organization",
					"description": "A square dark version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/squareLogoDark"
						}
					}
				},
				{
					"name": "Organization Update Branding Square Logo Dark",
					"value": "Organization Update Branding Square Logo Dark",
					"action": "Update squareLogoDark for the navigation property branding in organization",
					"description": "A square dark version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/branding/squareLogoDark"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /organization/{organization-id}/branding",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Delete Branding"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Delete Branding"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/branding",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Get Branding"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Get Branding"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Get Branding"
					]
				}
			}
		},
		{
			"displayName": "PATCH /organization/{organization-id}/branding",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Update Branding"
					]
				}
			}
		},
		{
			"displayName": "PATCH /organization/{organization-id}/branding<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Update Branding"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/branding/backgroundImage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Get Branding Background Image"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/backgroundImage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Update Branding Background Image"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/backgroundImage<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Update Branding Background Image"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/branding/bannerLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Get Branding Banner Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/bannerLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Update Branding Banner Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/bannerLogo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Update Branding Banner Logo"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/branding/customCSS",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Get Branding Custom CSS"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/customCSS",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Update Branding Custom CSS"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/customCSS<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Update Branding Custom CSS"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/branding/favicon",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Get Branding Favicon"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/favicon",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Update Branding Favicon"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/favicon<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Update Branding Favicon"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/branding/headerLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Get Branding Header Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/headerLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Update Branding Header Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/headerLogo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Update Branding Header Logo"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/branding/localizations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding List Localizations"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding List Localizations"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding List Localizations"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding List Localizations"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding List Localizations"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding List Localizations"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding List Localizations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding List Localizations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding List Localizations"
					]
				}
			}
		},
		{
			"displayName": "POST /organization/{organization-id}/branding/localizations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Create Localizations"
					]
				}
			}
		},
		{
			"displayName": "POST /organization/{organization-id}/branding/localizations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Create Localizations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Delete Localizations"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Delete Localizations"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Get Localizations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Get Localizations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Get Localizations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Update Localizations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Update Localizations"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Get Localizations Background Image"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Update Localizations Background Image"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Update Localizations Background Image"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Get Localizations Banner Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Update Localizations Banner Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Update Localizations Banner Logo"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/customCSS",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Get Localizations Custom CSS"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/customCSS",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Update Localizations Custom CSS"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/customCSS<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Update Localizations Custom CSS"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Get Localizations Favicon"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Update Localizations Favicon"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Update Localizations Favicon"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Get Localizations Header Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Update Localizations Header Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Update Localizations Header Logo"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Get Localizations Square Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Update Localizations Square Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Update Localizations Square Logo"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Get Localizations Square Logo Dark"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Update Localizations Square Logo Dark"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Branding Update Localizations Square Logo Dark"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/branding/squareLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Get Branding Square Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/squareLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Update Branding Square Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/squareLogo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Update Branding Square Logo"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/branding/squareLogoDark",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Get Branding Square Logo Dark"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/squareLogoDark",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Update Branding Square Logo Dark"
					]
				}
			}
		},
		{
			"displayName": "PUT /organization/{organization-id}/branding/squareLogoDark<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Organizational Branding"
					],
					"operation": [
						"Organization Update Branding Square Logo Dark"
					]
				}
			}
		},
];
