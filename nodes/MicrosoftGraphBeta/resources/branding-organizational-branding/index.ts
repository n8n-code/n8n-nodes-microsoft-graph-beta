import type { INodeProperties } from 'n8n-workflow';

export const brandingOrganizationalBrandingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					]
				}
			},
			"options": [
				{
					"name": "Branding Organizational Branding Get Organizational Branding",
					"value": "Branding Organizational Branding Get Organizational Branding",
					"action": "Get branding",
					"description": "Get branding",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/branding"
						}
					}
				},
				{
					"name": "Branding Organizational Branding Update Organizational Branding",
					"value": "Branding Organizational Branding Update Organizational Branding",
					"action": "Update branding",
					"description": "Update branding",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/branding"
						}
					}
				},
				{
					"name": "Branding Organizational Branding Get Background Image",
					"value": "Branding Organizational Branding Get Background Image",
					"action": "Get backgroundImage for organizationalBranding from branding",
					"description": "Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image will reduce bandwidth requirements and make the page load faster.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/branding/backgroundImage"
						}
					}
				},
				{
					"name": "Branding Organizational Branding Update Background Image",
					"value": "Branding Organizational Branding Update Background Image",
					"action": "Update backgroundImage for organizationalBranding in branding",
					"description": "Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image will reduce bandwidth requirements and make the page load faster.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/branding/backgroundImage"
						}
					}
				},
				{
					"name": "Branding Organizational Branding Get Banner Logo",
					"value": "Branding Organizational Branding Get Banner Logo",
					"action": "Get bannerLogo for organizationalBranding from branding",
					"description": "A banner version of your company logo that appears on the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/branding/bannerLogo"
						}
					}
				},
				{
					"name": "Branding Organizational Branding Update Banner Logo",
					"value": "Branding Organizational Branding Update Banner Logo",
					"action": "Update bannerLogo for organizationalBranding in branding",
					"description": "A banner version of your company logo that appears on the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/branding/bannerLogo"
						}
					}
				},
				{
					"name": "Branding Organizational Branding Get Custom CSS",
					"value": "Branding Organizational Branding Get Custom CSS",
					"action": "Get customCSS for organizationalBranding from branding",
					"description": "CSS styling that appears on the sign-in page. The allowed format is .css format only and not larger than 25 KB.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/branding/customCSS"
						}
					}
				},
				{
					"name": "Branding Organizational Branding Update Custom CSS",
					"value": "Branding Organizational Branding Update Custom CSS",
					"action": "Update customCSS for organizationalBranding in branding",
					"description": "CSS styling that appears on the sign-in page. The allowed format is .css format only and not larger than 25 KB.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/branding/customCSS"
						}
					}
				},
				{
					"name": "Branding Organizational Branding Get Favicon",
					"value": "Branding Organizational Branding Get Favicon",
					"action": "Get favicon for organizationalBranding from branding",
					"description": "A custom icon (favicon) to replace a default Microsoft product favicon on an Azure AD tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/branding/favicon"
						}
					}
				},
				{
					"name": "Branding Organizational Branding Update Favicon",
					"value": "Branding Organizational Branding Update Favicon",
					"action": "Update favicon for organizationalBranding in branding",
					"description": "A custom icon (favicon) to replace a default Microsoft product favicon on an Azure AD tenant.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/branding/favicon"
						}
					}
				},
				{
					"name": "Branding Organizational Branding Get Header Logo",
					"value": "Branding Organizational Branding Get Header Logo",
					"action": "Get headerLogo for organizationalBranding from branding",
					"description": "A company logo that appears in the header of the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/branding/headerLogo"
						}
					}
				},
				{
					"name": "Branding Organizational Branding Update Header Logo",
					"value": "Branding Organizational Branding Update Header Logo",
					"action": "Update headerLogo for organizationalBranding in branding",
					"description": "A company logo that appears in the header of the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/branding/headerLogo"
						}
					}
				},
				{
					"name": "Branding Organizational Branding Get Square Logo",
					"value": "Branding Organizational Branding Get Square Logo",
					"action": "Get squareLogo for organizationalBranding from branding",
					"description": "A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/branding/squareLogo"
						}
					}
				},
				{
					"name": "Branding Organizational Branding Update Square Logo",
					"value": "Branding Organizational Branding Update Square Logo",
					"action": "Update squareLogo for organizationalBranding in branding",
					"description": "A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/branding/squareLogo"
						}
					}
				},
				{
					"name": "Branding Organizational Branding Get Square Logo Dark",
					"value": "Branding Organizational Branding Get Square Logo Dark",
					"action": "Get squareLogoDark for organizationalBranding from branding",
					"description": "A square dark version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/branding/squareLogoDark"
						}
					}
				},
				{
					"name": "Branding Organizational Branding Update Square Logo Dark",
					"value": "Branding Organizational Branding Update Square Logo Dark",
					"action": "Update squareLogoDark for organizationalBranding in branding",
					"description": "A square dark version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/branding/squareLogoDark"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /branding",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Get Organizational Branding"
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
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Get Organizational Branding"
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
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Get Organizational Branding"
					]
				}
			}
		},
		{
			"displayName": "PATCH /branding",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Update Organizational Branding"
					]
				}
			}
		},
		{
			"displayName": "PATCH /branding<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Update Organizational Branding"
					]
				}
			}
		},
		{
			"displayName": "GET /branding/backgroundImage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Get Background Image"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/backgroundImage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Update Background Image"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/backgroundImage<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Update Background Image"
					]
				}
			}
		},
		{
			"displayName": "GET /branding/bannerLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Get Banner Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/bannerLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Update Banner Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/bannerLogo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Update Banner Logo"
					]
				}
			}
		},
		{
			"displayName": "GET /branding/customCSS",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Get Custom CSS"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/customCSS",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Update Custom CSS"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/customCSS<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Update Custom CSS"
					]
				}
			}
		},
		{
			"displayName": "GET /branding/favicon",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Get Favicon"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/favicon",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Update Favicon"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/favicon<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Update Favicon"
					]
				}
			}
		},
		{
			"displayName": "GET /branding/headerLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Get Header Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/headerLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Update Header Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/headerLogo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Update Header Logo"
					]
				}
			}
		},
		{
			"displayName": "GET /branding/squareLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Get Square Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/squareLogo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Update Square Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/squareLogo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Update Square Logo"
					]
				}
			}
		},
		{
			"displayName": "GET /branding/squareLogoDark",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Get Square Logo Dark"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/squareLogoDark",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Update Square Logo Dark"
					]
				}
			}
		},
		{
			"displayName": "PUT /branding/squareLogoDark<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Branding Organizational Branding"
					],
					"operation": [
						"Branding Organizational Branding Update Square Logo Dark"
					]
				}
			}
		},
];
