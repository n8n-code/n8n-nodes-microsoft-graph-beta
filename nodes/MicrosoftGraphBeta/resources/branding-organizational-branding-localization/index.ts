import type { INodeProperties } from 'n8n-workflow';

export const brandingOrganizationalBrandingLocalizationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					]
				}
			},
			"options": [
				{
					"name": "Branding List Localizations",
					"value": "Branding List Localizations",
					"action": "List localizations",
					"description": "Retrieve all localization branding objects, including the default branding.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/branding/localizations"
						}
					}
				},
				{
					"name": "Branding Create Localizations",
					"value": "Branding Create Localizations",
					"action": "Create organizationalBrandingLocalization",
					"description": "Create a new organizationalBrandingLocalization object. This creates a localized branding and at the same time, the default branding if it doesn't exist. The default branding is created only once. It's loaded when a localized branding isn't configured for the user's browser language. To retrieve the default branding, see Get branding.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/branding/localizations"
						}
					}
				},
				{
					"name": "Branding Delete Localizations",
					"value": "Branding Delete Localizations",
					"action": "Delete navigation property localizations for branding",
					"description": "Delete navigation property localizations for branding",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}"
						}
					}
				},
				{
					"name": "Branding Get Localizations",
					"value": "Branding Get Localizations",
					"action": "Get localizations from branding",
					"description": "Add different branding based on a locale.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}"
						}
					}
				},
				{
					"name": "Branding Update Localizations",
					"value": "Branding Update Localizations",
					"action": "Update the navigation property localizations in branding",
					"description": "Update the navigation property localizations in branding",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}"
						}
					}
				},
				{
					"name": "Branding Get Localizations Background Image",
					"value": "Branding Get Localizations Background Image",
					"action": "Get backgroundImage for the navigation property localizations from branding",
					"description": "Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image will reduce bandwidth requirements and make the page load faster.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/backgroundImage"
						}
					}
				},
				{
					"name": "Branding Update Localizations Background Image",
					"value": "Branding Update Localizations Background Image",
					"action": "Update backgroundImage for the navigation property localizations in branding",
					"description": "Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image will reduce bandwidth requirements and make the page load faster.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/backgroundImage"
						}
					}
				},
				{
					"name": "Branding Get Localizations Banner Logo",
					"value": "Branding Get Localizations Banner Logo",
					"action": "Get bannerLogo for the navigation property localizations from branding",
					"description": "A banner version of your company logo that appears on the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/bannerLogo"
						}
					}
				},
				{
					"name": "Branding Update Localizations Banner Logo",
					"value": "Branding Update Localizations Banner Logo",
					"action": "Update bannerLogo for the navigation property localizations in branding",
					"description": "A banner version of your company logo that appears on the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/bannerLogo"
						}
					}
				},
				{
					"name": "Branding Get Localizations Custom CSS",
					"value": "Branding Get Localizations Custom CSS",
					"action": "Get customCSS for the navigation property localizations from branding",
					"description": "CSS styling that appears on the sign-in page. The allowed format is .css format only and not larger than 25 KB.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/customCSS"
						}
					}
				},
				{
					"name": "Branding Update Localizations Custom CSS",
					"value": "Branding Update Localizations Custom CSS",
					"action": "Update customCSS for the navigation property localizations in branding",
					"description": "CSS styling that appears on the sign-in page. The allowed format is .css format only and not larger than 25 KB.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/customCSS"
						}
					}
				},
				{
					"name": "Branding Get Localizations Favicon",
					"value": "Branding Get Localizations Favicon",
					"action": "Get favicon for the navigation property localizations from branding",
					"description": "A custom icon (favicon) to replace a default Microsoft product favicon on an Azure AD tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/favicon"
						}
					}
				},
				{
					"name": "Branding Update Localizations Favicon",
					"value": "Branding Update Localizations Favicon",
					"action": "Update favicon for the navigation property localizations in branding",
					"description": "A custom icon (favicon) to replace a default Microsoft product favicon on an Azure AD tenant.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/favicon"
						}
					}
				},
				{
					"name": "Branding Get Localizations Header Logo",
					"value": "Branding Get Localizations Header Logo",
					"action": "Get headerLogo for the navigation property localizations from branding",
					"description": "A company logo that appears in the header of the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/headerLogo"
						}
					}
				},
				{
					"name": "Branding Update Localizations Header Logo",
					"value": "Branding Update Localizations Header Logo",
					"action": "Update headerLogo for the navigation property localizations in branding",
					"description": "A company logo that appears in the header of the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/headerLogo"
						}
					}
				},
				{
					"name": "Branding Get Localizations Square Logo",
					"value": "Branding Get Localizations Square Logo",
					"action": "Get squareLogo for the navigation property localizations from branding",
					"description": "A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/squareLogo"
						}
					}
				},
				{
					"name": "Branding Update Localizations Square Logo",
					"value": "Branding Update Localizations Square Logo",
					"action": "Update squareLogo for the navigation property localizations in branding",
					"description": "A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/squareLogo"
						}
					}
				},
				{
					"name": "Branding Get Localizations Square Logo Dark",
					"value": "Branding Get Localizations Square Logo Dark",
					"action": "Get squareLogoDark for the navigation property localizations from branding",
					"description": "A square dark version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/squareLogoDark"
						}
					}
				},
				{
					"name": "Branding Update Localizations Square Logo Dark",
					"value": "Branding Update Localizations Square Logo Dark",
					"action": "Update squareLogoDark for the navigation property localizations in branding",
					"description": "A square dark version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/branding/localizations/{{$parameter[\"organizationalBrandingLocalization-id\"]}}/squareLogoDark"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /branding/localizations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding List Localizations"
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
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding List Localizations"
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
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding List Localizations"
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
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding List Localizations"
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
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding List Localizations"
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
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding List Localizations"
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
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding List Localizations"
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
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding List Localizations"
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
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding List Localizations"
					]
				}
			}
		},
		{
			"displayName": "POST /branding/localizations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Create Localizations"
					]
				}
			}
		},
		{
			"displayName": "POST /branding/localizations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Create Localizations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /branding/localizations/{organizationalBrandingLocalization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Delete Localizations"
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
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Delete Localizations"
					]
				}
			}
		},
		{
			"displayName": "GET /branding/localizations/{organizationalBrandingLocalization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Get Localizations"
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
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Get Localizations"
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
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Get Localizations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /branding/localizations/{organizationalBrandingLocalization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Update Localizations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /branding/localizations/{organizationalBrandingLocalization-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Update Localizations"
					]
				}
			}
		},
		{
			"displayName": "GET /branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Get Localizations Background Image"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Update Localizations Background Image"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Update Localizations Background Image"
					]
				}
			}
		},
		{
			"displayName": "GET /branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Get Localizations Banner Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Update Localizations Banner Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Update Localizations Banner Logo"
					]
				}
			}
		},
		{
			"displayName": "GET /branding/localizations/{organizationalBrandingLocalization-id}/customCSS",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Get Localizations Custom CSS"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/localizations/{organizationalBrandingLocalization-id}/customCSS",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Update Localizations Custom CSS"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/localizations/{organizationalBrandingLocalization-id}/customCSS<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Update Localizations Custom CSS"
					]
				}
			}
		},
		{
			"displayName": "GET /branding/localizations/{organizationalBrandingLocalization-id}/favicon",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Get Localizations Favicon"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/localizations/{organizationalBrandingLocalization-id}/favicon",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Update Localizations Favicon"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/localizations/{organizationalBrandingLocalization-id}/favicon<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Update Localizations Favicon"
					]
				}
			}
		},
		{
			"displayName": "GET /branding/localizations/{organizationalBrandingLocalization-id}/headerLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Get Localizations Header Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/localizations/{organizationalBrandingLocalization-id}/headerLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Update Localizations Header Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/localizations/{organizationalBrandingLocalization-id}/headerLogo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Update Localizations Header Logo"
					]
				}
			}
		},
		{
			"displayName": "GET /branding/localizations/{organizationalBrandingLocalization-id}/squareLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Get Localizations Square Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/localizations/{organizationalBrandingLocalization-id}/squareLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Update Localizations Square Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/localizations/{organizationalBrandingLocalization-id}/squareLogo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Update Localizations Square Logo"
					]
				}
			}
		},
		{
			"displayName": "GET /branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Get Localizations Square Logo Dark"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Update Localizations Square Logo Dark"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding Localization"
					],
					"operation": [
						"Branding Update Localizations Square Logo Dark"
					]
				}
			}
		},
];
